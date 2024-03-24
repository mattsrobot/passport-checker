import { createHash } from "crypto";

function safeFileName(content: string) {
    return `${createHash('sha3-256').update(content).digest('hex')}.${content.split('.').pop()}`
}

export default safeFileName;
