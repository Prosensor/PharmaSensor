import { type NextRequest, NextResponse } from "next/server"
import { resend, ContactEmailTemplate, contactEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    const { name, email, pharmacyName, phone, equipment, message } = formData

    // Validation des champs requis
    if (!name || !email || !pharmacyName || !phone) {
      return NextResponse.json({ error: "Veuillez remplir tous les champs obligatoires" }, { status: 400 })
    }

    // Envoyer l'email avec Resend
    const { data, error } = await resend.emails.send({
      from: "Contact <onboarding@resend.dev>", // Utilisez l'email de dev de Resend
      to: [contactEmail], // Email de destination
      subject: `Nouvelle demande de contact de ${name}`,
      html: ContactEmailTemplate({
        name,
        email,
        pharmacyName,
        phone,
        equipment: equipment || "Non spécifié",
        message: message || "Aucun message",
      }),
      replyTo: email, // Correction ici: replyTo au lieu de reply_to
    })

    if (error) {
      console.error("Erreur Resend:", error)
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Votre message a été envoyé avec succès!" }, { status: 200 })
  } catch (error) {
    console.error("Erreur:", error)
    return NextResponse.json(
      { error: "Une erreur s'est produite lors du traitement de votre demande" },
      { status: 500 },
    )
  }
}

