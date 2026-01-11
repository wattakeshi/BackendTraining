import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { any } from "zod";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: "Token nao fornecido" })
    }
    const parts = authHeader.split(" ");
    if (parts.length !== 2) {
        return res.status(401).json({ error: "erro no formato do token" })
    }
    const token = parts[1];
    try {
        const decoded = (jwt as any).verify(token, "MINHA_CHAVE_SECRETA_SUPER_PROTEGIDA");
        (req as any).user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: "token invalido ou expirado" })
    }
}