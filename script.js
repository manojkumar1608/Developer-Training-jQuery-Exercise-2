$(document).ready(function () {
    $("#wrapper").css({
        border: "2px solid #FF1A00",
    });
  
    // Creating new div with id 'references'
    $("<div>", {
        id: "references",
        html: `
        <main class="center-content"> 
            <div class="hidden">
                <h4>References</h4> 
            </div>
            <ul class="list">         
                <li><h4>Ryan Ramirez Product Lead</h4></li>
                <li>Seashore Enterprises, 187 Clive Road, House Springs, Missouri 63940, (636) 423-2759</li>
                <li>Ryan was my direct manager from March 2018 until March 2020</li>
                <li><h4>Michael Brown Director of Operations</h4></li>
                <li>FutureTech Enterprises, 9102 Oak Boulevard, Rivertown, TX 75001, (555) 555-1212</li>
            </ul>
        </main>
        `,
    }).appendTo("#mypage_centerContent");
  
    $("<aside>", {
        class: "leftnav",
        html: `<h4>References</h4>`,
    }).appendTo("#mypage_leftnav");
  
    $("#mypage_header").css({
        "background-color": "#FFFF88",
        color: "#CC0000",
        "border-bottom": "2px solid #FF1A00",
        "height": "10px",
        "overflow": "hidden"
    });
  
    $("#center_section").css({
        "background-color": "#FFFF88",
        color: "#CC0000",
        "padding-bottom": "30px",
    });
  
    $("#mypage_centerContent main").css({
        "border-bottom": "2px solid #FF1A00",
    });
  
    $("#mypage_leftnav aside").css({
        color: "#CC0000",
        "border-right": "2px solid #FF1A00",
    });
  
    $("#mypage_footer").css({
        "background-color": "#FFFF88",
         color: "#CC0000",
        "border-bottom": "2px solid #FF1A00",
        "border-top": "2px solid #FF1A00",
        "overflow": "hidden",
    });
  
     const $footer = $('#mypage_footer footer');
     $footer.css({
         'display': 'none',
     });

  
     // Mouse enter: slide down
     $('#mypage_footer').on('mouseenter', function() {
         $footer.stop(true, true).slideDown(10000, function() {
             alert('Animation complete');
         });
     });
  
     // Mouse leave: slide up
     $('#mypage_footer').on('mouseleave', function() {
         $footer.stop(true).slideUp(500); 
     });

  
    // Header setup
    $('#mypage_header').hover(
        function() {
            // Mouse enters
            $(this).stop(true).animate({ height: '100px' }, 600);
        },
        function() {
            // Mouse leaves
            $(this).stop(true).animate({ height: '10px' }, 600); 
        }
    );
  });
  