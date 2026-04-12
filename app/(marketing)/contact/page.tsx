// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { Mail, Phone, MapPin } from "lucide-react"

// export default function ContactPage() {
//   return (
//     <div className="bg-background">

//       {/* HERO */}

//       <section className="max-w-6xl mx-auto px-6 py-24 text-center">

//         <h1 className="text-4xl md:text-5xl font-bold">
//           Contact <span className="text-accent">Us</span>
//         </h1>

//         <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
//           Have questions about our services? Our team is ready to help you
//           grow your business with the right strategy, finance, and technology solutions.
//         </p>

//       </section>

//       {/* CONTACT SECTION */}

//       <section className="max-w-7xl mx-auto px-6 pb-24">

//         <div className="grid md:grid-cols-2 gap-12">

//           {/* CONTACT FORM */}

//           <Card>

//             <CardContent className="p-8">

//               <h2 className="text-2xl font-semibold mb-6">
//                 Send us a message
//               </h2>

//               <form className="space-y-5">

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <Input placeholder="Full Name" />
//                   <Input placeholder="Email Address" type="email" />
//                 </div>

//                 <Input placeholder="Subject" />

//                 <Textarea
//                   placeholder="Your message..."
//                   rows={5}
//                 />

//                 <Button size="lg" className="w-full">
//                   Send Message
//                 </Button>

//               </form>

//             </CardContent>

//           </Card>

//           {/* CONTACT INFO */}

//           <div className="space-y-6">

//             <Card className="hover:shadow-lg transition">

//               <CardContent className="flex items-start gap-4 p-6">

//                 <div className="p-3 rounded-lg bg-accent/10">
//                   <Mail className="w-6 h-6 text-accent" />
//                 </div>

//                 <div>
//                   <h3 className="font-semibold">Email</h3>
//                   <p className="text-muted-foreground">
//                     info@yourcompany.com
//                   </p>
//                 </div>

//               </CardContent>

//             </Card>

//             <Card className="hover:shadow-lg transition">

//               <CardContent className="flex items-start gap-4 p-6">

//                 <div className="p-3 rounded-lg bg-accent/10">
//                   <Phone className="w-6 h-6 text-accent" />
//                 </div>

//                 <div>
//                   <h3 className="font-semibold">Phone</h3>
//                   <p className="text-muted-foreground">
//                     +92 300 1234567
//                   </p>
//                 </div>

//               </CardContent>

//             </Card>

//             <Card className="hover:shadow-lg transition">

//               <CardContent className="flex items-start gap-4 p-6">

//                 <div className="p-3 rounded-lg bg-accent/10">
//                   <MapPin className="w-6 h-6 text-accent" />
//                 </div>

//                 <div>
//                   <h3 className="font-semibold">Office</h3>
//                   <p className="text-muted-foreground">
//                     Rawalpindi, Pakistan
//                   </p>
//                 </div>

//               </CardContent>

//             </Card>

//           </div>

//         </div>

//       </section>

//       {/* CTA */}

//       <section className="bg-primary text-primary-foreground py-20 text-center">

//         <h2 className="text-3xl font-bold">
//           Let’s Build Something Great Together
//         </h2>

//         <p className="mt-4 max-w-xl mx-auto opacity-90">
//           Whether you need business consulting, financial services, or
//           technology solutions, our team is here to help.
//         </p>

//         <div className="mt-8">
//           <Button size="lg" variant="secondary">
//             Schedule Consultation
//           </Button>
//         </div>

//       </section>

//     </div>
//   )
// }

import { Container } from '@/components/Container'
import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default ContactPage
