import { type NextRequest, NextResponse } from "next/server"
import { resend, DemoEmailTemplate, contactEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    const { name, email, message } = formData

    // Validation des champs requis
    if (!name || !email) {
      return NextResponse.json({ error: "Veuillez remplir tous les champs obligatoires" }, { status: 400 })
    }

    // Envoyer l'email avec Resend
    const { data, error } = await resend.emails.send({
      from: "Démo PharmaSensor <onboarding@resend.dev>", // Utilisez l'email de dev de Resend
      to: [contactEmail], // Email de destination
      subject: `Nouvelle demande de démonstration de ${name}`,
      html: DemoEmailTemplate({
        name,
        email,
        message: message || "Aucun message",
      }),
      replyTo: email,
    })

    if (error) {
      console.error("Erreur Resend:", error)
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 })
    }

    return NextResponse.json(
      { success: true, message: "Votre demande de démonstration a été envoyée avec succès!" },
      { status: 200 },
    )
  } catch (error) {
    console.error("Erreur:", error)
    return NextResponse.json(
      { error: "Une erreur s'est produite lors du traitement de votre demande" },
      { status: 500 },
    )
  }
}

