async function getKey(passphrase: string) {
  const enc = new TextEncoder();
  return crypto.subtle.importKey("raw", enc.encode(passphrase.padEnd(32, "0").slice(0, 32)), "AES-GCM", false, ["encrypt", "decrypt"]);
}
export async function encryptMessage(plaintext: string, passphrase: string) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await getKey(passphrase);
  const cipherBuf = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(plaintext));
  const packed = new Uint8Array(iv.byteLength + cipherBuf.byteLength);
  packed.set(iv, 0);
  packed.set(new Uint8Array(cipherBuf), iv.byteLength);
  return btoa(String.fromCharCode(...packed));
}
export async function decryptMessage(cipher: string, passphrase: string) {
  try {
    const raw = Uint8Array.from(atob(cipher), (c) => c.charCodeAt(0));
    const iv = raw.slice(0, 12);
    const data = raw.slice(12);
    const key = await getKey(passphrase);
    const plainBuf = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
    return new TextDecoder().decode(plainBuf);
  } catch { return null; }
}
