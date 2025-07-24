import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();

  if (!data.email || !data.nom || !data.telephone || !data.pharmacie || !data.equipements) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "mail81.lwspanel.com",
    port: 465,
    secure: true,
    auth: {
      user: "contact@greensensor.fr",
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"Site PharmaSensor" <contact@greensensor.fr>',
    to: "corentinadlpro@gmail.com",
    subject: "Nouvelle demande de devis PharmaSensor",
    text: `\nNom: ${data.nom}\nPharmacie: ${data.pharmacie}\nEmail: ${data.email}\nTéléphone: ${data.telephone}\nNombre d'équipements: ${data.equipements}\nMessage: ${data.message || "(aucun message)"}\nConsentement RGPD: ${data.consent ? "Oui" : "Non"}\n`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #f6fef8; padding: 32px;">
        <div style="max-width: 520px; margin: auto; background: #fff; border-radius: 16px; box-shadow: 0 2px 12px rgba(62,171,53,0.08); padding: 32px; border: 1.5px solid #3eab35;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #3eab35; margin: 0; font-size: 2rem; font-weight: bold;">Nouvelle demande de devis</h2>
          </div>
          <table style="width: 100%; font-size: 16px; color: #222; margin-bottom: 24px;">
            <tr><td style="font-weight: bold; padding: 8px 0;">Nom :</td><td>${data.nom}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Pharmacie :</td><td>${data.pharmacie}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Email :</td><td><a href="mailto:${data.email}" style="color: #3eab35; text-decoration: underline;">${data.email}</a></td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Téléphone :</td><td><a href="tel:${data.telephone}" style="color: #3eab35; text-decoration: underline;">${data.telephone}</a></td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Nombre d'équipements :</td><td>${data.equipements}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0; vertical-align: top;">Message :</td><td style="white-space: pre-line;">${data.message || "(aucun message)"}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Consentement RGPD :</td><td>${data.consent ? "Oui" : "Non"}</td></tr>
          </table>
          <div style="margin-top: 24px; text-align: center;">
            <span style="display: inline-block; background: #3eab35; color: #fff; font-weight: 600; border-radius: 8px; padding: 8px 20px; font-size: 15px; letter-spacing: 1px;">PharmaSensor</span>
            <div style="color: #888; font-size: 13px; margin-top: 8px;">Demande envoyée depuis le site PharmaSensor</div>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur SMTP:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi du mail" }, { status: 500 });
  }
} 