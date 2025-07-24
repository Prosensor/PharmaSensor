"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import Link from "next/link"

const schemaDevis = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  pharmacie: z.string().min(2, "Le nom de la pharmacie doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  telephone: z.string().min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres"),
  equipements: z.string().min(1, "Veuillez sélectionner un nombre d'équipements"),
  message: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Vous devez accepter la politique de confidentialité." }) }),
})

export default function DemandeDevisPage() {
  const [chargement, setChargement] = useState(false)

  const form = useForm<z.infer<typeof schemaDevis>>({
    resolver: zodResolver(schemaDevis),
    defaultValues: {
      nom: "",
      pharmacie: "",
      email: "",
      telephone: "",
      equipements: "1-3",
      message: "",
      consent: undefined,
    },
  })

  async function onSubmit(values: z.infer<typeof schemaDevis>) {
    setChargement(true)
    try {
      const res = await fetch("/api/send-quote-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Erreur lors de l'envoi");
      toast.success("Demande de devis envoyée avec succès !")
      form.reset();
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setChargement(false);
    }
  }

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-green-50 to-white py-16">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-2">Demande de Devis</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Remplissez ce formulaire pour recevoir un devis personnalisé pour la solution PharmaSensor. Notre équipe vous répondra sous 24h ouvrées.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Jean Dupont" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pharmacie"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom de la pharmacie <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Pharmacie du Centre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="jean@pharmacie.fr" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="01 23 45 67 89" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="equipements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre d'équipements à surveiller <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                      >
                        <option value="1-3">1 à 3 équipements</option>
                        <option value="4-6">4 à 6 équipements</option>
                        <option value="7-10">7 à 10 équipements</option>
                        <option value="10+">Plus de 10 équipements</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (facultatif)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Précisez vos besoins spécifiques ou posez-nous vos questions..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={e => field.onChange(e.target.checked)}
                          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                      </FormControl>
                      <span className="text-sm text-muted-foreground">
                        J'accepte que mes données soient traitées conformément à la {" "}
                        <Link href="/politique-de-confidentialite" className="text-green-600 hover:underline" target="_blank">
                          politique de confidentialité
                        </Link>.
                        <span className="text-red-500">*</span>
                      </span>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-[#3eab35] hover:bg-[#dd234b]" disabled={chargement}>
                {chargement ? "Envoi en cours..." : "Envoyer ma demande de devis"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
} 