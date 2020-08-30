var some = false;
function validateForm(){

    var name = document.forms["myforms"]["p_id"].value;
    var p_len = document.forms["myforms"]["p_name"].value;
    var p_prize = document.forms["myforms"]["prize"].value;
    var date = document.forms["myforms"]["p_date"].value;
    var phone = document.forms["myforms"]["p_number"].value;
    var mail = document.forms["myforms"]["p_email"].value;
    var p1 = /^\w\w\w[\-]\d\d\d\d\d\d$/;
    var p2 = /^\d{2}[\/]\d{2}[\/]\d{4}$/;
    var p3 = /^\d{10}$/;
    var p4 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validate = true;
    if(name.match(p1));
    else{
      alert("Specify the Correct format for the product-id");
      validate = false;
    }
    if(p_len!="" && p_len.length<=50);
    else{
      alert("Specify the correct length which is upto 50 chars");
      validate = false;
    }
    if(p_prize>=100 && p_prize<=9999);
    else{
      alert("Specify the prize value within 100-999");
      validate = false;
    }
    if(date.match(p2));
    else{
      alert("Specify the Correct format for the date");
      validate = false;
    }

    if(!phone.match(p3)){
      alert("Invalid phone number");
      validate = false;
    }
    if(!mail.match(p4)){
      alert("Specify your valid email address");
      validate = false;
    }
    // some = validate;
    if(validate){
      product_checkout();
    }
    return validate;
}



// var button = document.getElementById("s1");
// button.addEventListener("click",product_checkout);

function product_checkout(){
  var p_id = document.forms["myforms"]["p_id"].value;
  var p_name = document.forms["myforms"]["p_name"].value;
  var p_prize = document.forms["myforms"]["prize"].value;
  var date = document.forms["myforms"]["p_date"].value;
  var address = document.forms["myforms"]["address"].value;
  var phone = document.forms["myforms"]["p_number"].value;
  var mail = document.forms["myforms"]["p_email"].value;
  var quantity = document.forms["myforms"]["quantity"].value;
  var total = quantity * p_prize;

  // alert(p_id + p_name);
  var heading = document.createElement("h1");
  var h1 = document.createElement("h4");
  var h2 = document.createElement("h4");
  var h3 = document.createElement("h3");
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  var p4 = document.createElement("p");
  var p5 = document.createElement("p");
  var h11 = document.createElement("p");
  var h12 = document.createElement("p");
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var invoice_no = document.createElement("p");
  var from = document.createElement("p");
  var to = document.createElement("p");
  var quan = document.createElement("p");
  var price = document.createElement("p");
  var t_price = document.createElement("p");
  var hr = document.createElement("hr");

  div1.setAttribute("id","invoice");
  // div1.setAttribute("hidden");
  div2.setAttribute("id","style");
  h3.setAttribute("id","title");

  heading.textContent = "INVOICE";
  h11.textContent = p_id;
  h12.textContent = p_name;
  quan.innerHTML = quantity;
  h3.innerHTML = "<strong>e</strong>-" + "Cartel";
  price.innerHTML = "$ " + p_prize;
  t_price.innerHTML = "$ " + "<strong>" + total + "</strong>";
  invoice_no.innerHTML = "Invoice: #" + p_id + "<br>" + "Created: " + date;
  from.innerHTML = "VIT Inc. <br> 1 Hacker Way <br>  Menlo Park, VLR 94025";
  to.textContent = address;
  h1.textContent = "Product Description";
  p1.innerHTML = "Product ID";
  p2.innerHTML = "Product Name";
  h2.innerHTML = "Pricing";
  p3.innerHTML = "Quanity";
  p4.innerHTML = "Price";
  p5.innerHTML = "Total";



  div1.appendChild(heading);
  div1.appendChild(h3);
  div1.appendChild(invoice_no);
  div1.appendChild(to);
  div1.appendChild(from);
  div1.appendChild(div2);
  div2.appendChild(h1);
  div2.appendChild(h11);
  div2.appendChild(p1);
  div2.appendChild(h12);
  div2.appendChild(p2);
  div2.appendChild(h2);
  div2.appendChild(quan);
  div2.appendChild(p3);
  div2.appendChild(price);
  div2.appendChild(p4);
  div2.appendChild(hr);
  div2.appendChild(t_price);
  div2.appendChild(p5);


   

  div1.classList.add("mydiv1");
  div2.classList.add("mydiv2");
  heading.classList.add("invoice_head");
  invoice_no.classList.add("invoice_no");
  to.classList.add("to_addr");
  h1.classList.add("h1_dr");
  h2.classList.add("h1_dr");
  h11.classList.add("h11");
  h12.classList.add("h11");
  quan.classList.add("h11");
  price.classList.add("h11");
  t_price.classList.add("h11");

  document.body.appendChild(div1);

  // var para = document.createElement("p");
  // para.setAttribute("id","invoice");
  // para.innerText = "This is a paragraph.";
  // document.body.appendChild(para);
  // const element = document.getElementById("invoice");
  //       // Choose the element and save the PDF for our user.
  //       html2pdf()
  //         .from(element)
  //         .save();
  // document.write("<h1>My name is shaswat</h1>");
  print_purchase();


} 



function print_purchase(){
  // document.write(p_id + p_name + p_prize + date + phone + mail);
   const element = document.getElementById("invoice");
        // Choose the element and save the PDF for our user.
        html2pdf()
          .from(element)
          .save();
}



  

