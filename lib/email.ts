import { Resend } from "resend"

// Initialiser Resend avec votre clé API
export const resend = new Resend(process.env.RESEND_API_KEY || "test_api_key")

// Email de destination pour les formulaires
export const contactEmail = process.env.CONTACT_EMAIL || "corentinadlpro@gmail.com"

// Email template pour les demandes de contact - Design professionnel amélioré
export const ContactEmailTemplate = ({
  name,
  email,
  pharmacyName,
  phone,
  equipment,
  message,
}: {
  name: string
  email: string
  pharmacyName: string
  phone: string
  equipment: string
  message: string
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouvelle demande de contact</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid #eaeaea;
    }
    .logo {
      max-width: 180px;
      height: auto;
    }
    .content {
      padding: 30px 20px;
    }
    h1 {
      color: #22c55e;
      margin-top: 0;
      font-size: 24px;
      text-align: center;
      margin-bottom: 25px;
    }
    .notification-banner {
      background-color: #ecfdf5;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 25px;
      text-align: center;
      border: 1px solid #22c55e;
    }
    .notification-banner p {
      margin: 0;
      color: #065f46;
      font-weight: 500;
    }
    .info-block {
      margin-bottom: 25px;
    }
    .info-label {
      font-weight: bold;
      color: #4b5563;
      margin-bottom: 5px;
      display: block;
    }
    .info-value {
      background-color: #f9fafb;
      padding: 12px;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
      font-size: 15px;
    }
    .message-box {
      background-color: #f9fafb;
      padding: 15px;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
      margin-top: 10px;
      font-size: 15px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      color: #6b7280;
      font-size: 14px;
      border-top: 1px solid #eaeaea;
    }
    .action-button {
      display: block;
      width: 200px;
      margin: 25px auto 15px;
      background-color: #22c55e;
      color: white !important; /* Ajout de !important pour s'assurer que la couleur est appliquée */
      text-decoration: none;
      text-align: center;
      padding: 12px 20px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .action-button:hover {
      background-color: #16a34a;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-AYDinRzg0q4iiM7rCX89iyAXLOljOj.jpeg" alt="PharmaSensor Logo" class="logo">
    </div>
    <div class="content">
      <h1>Nouvelle demande de contact</h1>
      
      <div class="notification-banner">
        <p>Un nouveau client potentiel a soumis une demande d'information via le formulaire de contact.</p>
      </div>
      
      <div class="info-block">
        <span class="info-label">Nom</span>
        <div class="info-value">${name}</div>
      </div>
      
      <div class="info-block">
        <span class="info-label">Email</span>
        <div class="info-value">${email}</div>
      </div>
      
      <div class="info-block">
        <span class="info-label">Pharmacie</span>
        <div class="info-value">${pharmacyName}</div>
      </div>
      
      <div class="info-block">
        <span class="info-label">Téléphone</span>
        <div class="info-value">${phone}</div>
      </div>
      
      <div class="info-block">
        <span class="info-label">Équipements à surveiller</span>
        <div class="info-value">${equipment}</div>
      </div>
      
      <div class="info-block">
        <span class="info-label">Message</span>
        <div class="message-box">${message || "Aucun message"}</div>
      </div>
      
      <a href="mailto:${email}?subject=Votre demande d'information PharmaSensor&body=Bonjour ${name},%0D%0A%0D%0AMerci pour votre intérêt pour PharmaSensor.%0D%0A%0D%0A" class="action-button">Répondre au client</a>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} PharmaSensor. Tous droits réservés.</p>
      <p>123 Avenue de la Santé, 75001 Paris, France</p>
    </div>
  </div>
</body>
</html>
`

// Email template pour les demandes de démo - Design professionnel amélioré
export const DemoEmailTemplate = ({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouvelle demande de démonstration</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid #eaeaea;
    }
    .logo {
      max-width: 180px;
      height: auto;
    }
    .content {
      padding: 30px 20px;
    }
    h1 {
      color: #22c55e;
      margin-top: 0;
      font-size: 24px;
      text-align: center;
      margin-bottom: 25px;
    }
    .notification-banner {
      background-color: #ecfdf5;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 25px;
      text-align: center;
      border: 1px solid #22c55e;
    }
    .notification-banner p {
      margin: 0;
      color: #065f46;
      font-weight: 500;
    }
    .info-block {
      margin-bottom: 25px;
    }
    .info-label {
      font-weight: bold;
      color: #4b5563;
      margin-bottom: 5px;
      display: block;
    }
    .info-value {
      background-color: #f9fafb;
      padding: 12px;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
      font-size: 15px;
    }
    .message-box {
      background-color: #f9fafb;
      padding: 15px;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
      margin-top: 10px;
      font-size: 15px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      color: #6b7280;
      font-size: 14px;
      border-top: 1px solid #eaeaea;
    }
    .action-button {
      display: block;
      width: 200px;
      margin: 25px auto 15px;
      background-color: #22c55e;
      color: white !important; /* Ajout de !important pour s'assurer que la couleur est appliquée */
      text-decoration: none;
      text-align: center;
      padding: 12px 20px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .action-button:hover {
      background-color: #16a34a;
    }
    .priority-tag {
      display: inline-block;
      background-color: #fef3c7;
      color: #92400e;
      padding: 5px 10px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 15px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-AYDinRzg0q4iiM7rCX89iyAXLOljOj.jpeg" alt="PharmaSensor Logo" class="logo">
    </div>
    <div class="content">
      <h1>Nouvelle demande de démonstration</h1>
      
      <div class="notification-banner">
        <p>Un client intéressé souhaite une démonstration de la solution PharmaSensor.</p>
      </div>
      
      <div style="text-align: center;">
        <span class="priority-tag">Priorité élevée</span>
      </div>
      
      <div class="info-block">
        <span class="info-label">Nom</span>
        <div class="info-value">${name}</div>
      </div>
      
      <div class="info-block">
        <span class="info-label">Email</span>
        <div class="info-value">${email}</div>
      </div>
      
      <div class="info-block">
        <span class="info-label">Message</span>
        <div class="message-box">${message || "Aucun message"}</div>
      </div>
      
      <a href="mailto:${email}?subject=Votre demande de démonstration PharmaSensor&body=Bonjour ${name},%0D%0A%0D%0AMerci pour votre intérêt pour PharmaSensor. Nous serions ravis de vous proposer une démonstration personnalisée.%0D%0A%0D%0APour organiser cette démonstration, pourriez-vous nous indiquer vos disponibilités dans les prochains jours ?%0D%0A%0D%0A" class="action-button">Planifier une démo</a>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} PharmaSensor. Tous droits réservés.</p>
      <p>123 Avenue de la Santé, 75001 Paris, France</p>
    </div>
  </div>
</body>
</html>
`

