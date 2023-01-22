jQuery(document).ready(function(){
//save button
    $('#btn-one').click(function(){
        html2canvas(document.querySelector('#invoice')).then((canvas)=>{
            let base64image=canvas.toDataURL('image/png');
           // console.log(base64image);
           let pdf=new jsPDF ( 'p', 'px', [1600,1131]);
           pdf.addImage(base64image, 'PNG', 15,15,1110,381);
           pdf.save('receipt.pdf');
        })
    })

});
