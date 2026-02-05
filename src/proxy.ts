import { NextProxy, NextResponse } from "next/server";

const proxy: NextProxy = () => {
    const response: NextResponse = NextResponse.next();
    response.headers.set("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'");
    response.headers.set("Permissions-Policy", "camera=(), display-capture=(), geolocation=(), microphone=(), payment=()");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set("Strict-Transport-Security", "max-age=31536000");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-DNS-Prefetch-Control", "off");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    return response;
};

export default proxy;
