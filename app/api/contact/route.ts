import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, email, pharmacyName, phone, equipment, message, formule } = formData;

    // Validation des champs requis
    if (!name || !email) {
      return NextResponse.json({ error: "Veuillez remplir tous les champs obligatoires" }, { status: 400 });
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

    // Design spécial pour le formulaire de contact général (message contient 'Sujet : ...')
    let html;
    if (message && message.startsWith("Sujet : ")) {
      html = `
        <div style="font-family: Arial, sans-serif; background: #f4f8fb; padding: 32px;">
          <div style="max-width: 540px; margin: auto; background: #fff; border-radius: 18px; box-shadow: 0 2px 16px rgba(30,64,175,0.08); padding: 32px; border: 1.5px solid #2563eb;">
            <div style="text-align: left; margin-bottom: 24px;">
              <h2 style="color: #2563eb; margin: 0; font-size: 2rem; font-weight: bold;">Nouveau message de contact</h2>
            </div>
            <div style="font-size: 16px; color: #222; margin-bottom: 24px;">
              <p><strong>Nom :</strong> ${name}</p>
              <p><strong>Email :</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: underline;">${email}</a></p>
              ${phone ? `<p><strong>Téléphone :</strong> <a href="tel:${phone}" style="color: #2563eb; text-decoration: underline;">${phone}</a></p>` : ""}
              ${pharmacyName ? `<p><strong>Pharmacie :</strong> ${pharmacyName}</p>` : ""}
            </div>
            <div style="background: #f1f5f9; border-radius: 10px; padding: 18px; margin-bottom: 24px; border-left: 4px solid #2563eb;">
              <pre style="margin: 0; font-size: 15px; color: #222; white-space: pre-line;">${message}</pre>
            </div>
            <div style="margin-top: 24px; text-align: right;">
              <span style="display: inline-block; background: #2563eb; color: #fff; font-weight: 600; border-radius: 8px; padding: 8px 20px; font-size: 15px; letter-spacing: 1px;">Contact Web</span>
              <div style="color: #888; font-size: 13px; margin-top: 8px;">Message envoyé depuis le formulaire de contact PharmaSensor</div>
            </div>
          </div>
        </div>
      `;
    } else {
      html = `
        <div style="font-family: Arial, sans-serif; background: #f6fef8; padding: 32px;">
          <div style="max-width: 520px; margin: auto; background: #fff; border-radius: 16px; box-shadow: 0 2px 12px rgba(62,171,53,0.08); padding: 32px; border: 1.5px solid #3eab35;">
            <div style="text-align: center; margin-bottom: 24px;">
              <h2 style="color: #3eab35; margin: 0; font-size: 2rem; font-weight: bold;">Nouvelle demande de contact</h2>
            </div>
            <table style="width: 100%; font-size: 16px; color: #222; margin-bottom: 24px;">
              <tr><td style="font-weight: bold; padding: 8px 0;">Nom :</td><td>${name}</td></tr>
              <tr><td style="font-weight: bold; padding: 8px 0;">Pharmacie :</td><td>${pharmacyName}</td></tr>
              <tr><td style="font-weight: bold; padding: 8px 0;">Email :</td><td><a href="mailto:${email}" style="color: #3eab35; text-decoration: underline;">${email}</a></td></tr>
              <tr><td style="font-weight: bold; padding: 8px 0;">Téléphone :</td><td><a href="tel:${phone}" style="color: #3eab35; text-decoration: underline;">${phone}</a></td></tr>
              ${formule ? `<tr><td style="font-weight: bold; padding: 8px 0;">Formule choisie :</td><td>${formule}</td></tr>` : ""}
              <tr><td style="font-weight: bold; padding: 8px 0;">Nombre d'équipements :</td><td>${equipment || "Non spécifié"}</td></tr>
              <tr><td style="font-weight: bold; padding: 8px 0; vertical-align: top;">Message :</td><td style="white-space: pre-line;">${message || "(aucun message)"}</td></tr>
            </table>
            <div style="margin-top: 24px; text-align: center;">
              <span style="display: inline-block; background: #3eab35; color: #fff; font-weight: 600; border-radius: 8px; padding: 8px 20px; font-size: 15px; letter-spacing: 1px;">PharmaSensor</span>
              <div style="color: #888; font-size: 13px; margin-top: 8px;">Demande envoyée depuis le site PharmaSensor</div>
            </div>
          </div>
        </div>
      `;
    }

    const mailOptions = {
      from: '"Site PharmaSensor" <contact@greensensor.fr>',
      to: "corentinadlpro@gmail.com",
      subject: message && message.startsWith("Sujet : ") ? `Nouveau message de contact PharmaSensor` : `Nouvelle demande de contact PharmaSensor`,
      text: `Nom: ${name}\nPharmacie: ${pharmacyName}\nEmail: ${email}\nTéléphone: ${phone}\nFormule: ${formule || "Non spécifiée"}\nNombre d'équipements: ${equipment || "Non spécifié"}\nMessage: ${message || "(aucun message)"}\n`,
      html,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Votre message a été envoyé avec succès!" }, { status: 200 });
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json(
      { error: "Une erreur s'est produite lors du traitement de votre demande" },
      { status: 500 },
    );
  }
}

