import type { Request, Response } from "express";
import bcrypt from "bcrypt"
import { prisma } from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const AuthController = {
    login: async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            const user = await prisma.user.findUnique({ where: { email } });
            if (!user) return res.status(401).json({ error: "Email ou usuario invalido!" })

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ error: "senha invalida" })

            const token = jwt.sign(

                { userId: user.id, role: user.role },
                "MINHA_CHAVE_SECRETA_SUPER_PROTEGIDA",
                { expiresIn: "1h" }
            );
            res.json({ message: "Login realizado!", token });
        } catch (error) {
            res.status(500).json({ error: "erro interno no servidor" })

        }
    },

    register: async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword
                }
            });
            res.status(201).json({ message: "Usuario criado!", id: newUser.id })
        } catch (error) {
            res.status(500).json({ error: "erro ao criar usuario. confirme se o e-mail já existe" })
        }
    }
}