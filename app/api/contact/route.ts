import { NextResponse } from "next/server";
import { Resend } from "resend";

//const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    console.log("data", name, email, company, message);
     return NextResponse.json({ success: true, data:"data" });
    // const data = await resend.emails.send({
    //   from: "Contact Form <onboarding@resend.dev>", // change later to your domain
    //   to: ["your@email.com"], // 👈 your email
    //   subject: `New Contact Form Submission from ${name}`,
    //   replyTo: email,

    //   html: `
    //     <h2>New Contact Message</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || "N/A"}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}