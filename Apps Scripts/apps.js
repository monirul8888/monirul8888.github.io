function doPost(e) {


  var sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet();


  var data = JSON.parse(e.postData.contents);



  // Save to Google Sheet

  sheet.appendRow([

    data.name,
    data.email,
    data.phone,
    data.message,
    new Date()

  ]);





  // Auto Reply Email To Visitor


  MailApp.sendEmail({

    to:data.email,

    subject:"Thank you for contacting Md. Monirul Islam",

    htmlBody:

`
<div style="
font-family:Arial,Helvetica,sans-serif;
background:#f8fafc;
padding:30px;
">


<div style="
max-width:600px;
margin:auto;
background:white;
border-radius:16px;
padding:30px;
border:1px solid #e5e7eb;
">


<div style="
background:#0f172a;
padding:20px;
border-radius:12px;
color:white;
text-align:center;
">

<h2 style="
margin:0;
font-size:22px;
">
Thank you for reaching out!
</h2>

<p style="
margin-top:8px;
color:#cbd5e1;
">
Md. Monirul Islam
</p>


</div>



<p style="
font-size:15px;
color:#334155;
margin-top:25px;
">

Dear <b>${data.name}</b>,

</p>



<p style="
font-size:15px;
color:#475569;
line-height:1.7;
">

Thank you for contacting me.
I have successfully received your message and will review your inquiry carefully.

</p>




<div style="
background:#f1f5f9;
padding:15px;
border-radius:10px;
margin:20px 0;
">


<p style="
margin:0;
font-size:14px;
color:#64748b;
">

Your Message:

</p>


<p style="
margin-top:8px;
color:#334155;
">

${data.message}

</p>


</div>




<p style="
font-size:15px;
color:#475569;
line-height:1.7;
">

I will get back to you as soon as possible.

</p>




<br>



<div style="
border-top:1px solid #e5e7eb;
padding-top:15px;
font-size:14px;
color:#475569;
">


<strong>
Md. Monirul Islam
</strong>

<br>

AI Automation Engineer

<br>

Email:
monirrul.ai@gmail.com


</div>



</div>


</div>

`

  });







  // Notification Email To Owner


MailApp.sendEmail({

to:"monirrul.ai@gmail.com",

subject:"New Contact Form Submission - Website",

htmlBody:


`

<div style="
font-family:Arial;
max-width:600px;
margin:auto;
background:#ffffff;
padding:25px;
border:1px solid #e5e7eb;
border-radius:12px;
">


<h2 style="
color:#2563eb;
">

New Website Contact

</h2>



<table style="
width:100%;
font-size:15px;
color:#334155;
">


<tr>

<td>
<b>Name</b>
</td>

<td>
${data.name}
</td>

</tr>


<tr>

<td>
<b>Email</b>
</td>

<td>
${data.email}
</td>

</tr>


<tr>

<td>
<b>Phone</b>
</td>

<td>
${data.phone}
</td>

</tr>


</table>




<div style="
margin-top:20px;
background:#f8fafc;
padding:15px;
border-radius:10px;
">


<b>
Message
</b>


<p>

${data.message}

</p>


</div>




</div>


`

});






return ContentService

.createTextOutput(

JSON.stringify({

success:true

})

)

.setMimeType(

ContentService.MimeType.JSON

);


}