        function zero()
        {
            var a=document.getElementById("text").value;
            var a=a+0;
            document.getElementById("text").value=a;
        }
        function one()
        {
            var a=document.getElementById("text").value;
            var a=a+1;
            document.getElementById("text").value=a;
        }
        function two()
        {
            var a=document.getElementById("text").value;
            var a=a+2;
            document.getElementById("text").value=a;
        }
        function three()
        {
            var a=document.getElementById("text").value;
            var a=a+3;
            document.getElementById("text").value=a;
        }
        function four()
        {
            var a=document.getElementById("text").value;
            var a=a+4;
            document.getElementById("text").value=a;
        }
        function five()
        {
            var a=document.getElementById("text").value;
            var a=a+5;
            document.getElementById("text").value=a;
        }
        function six()
        {
            var a=document.getElementById("text").value;
            var a=a+6;
            document.getElementById("text").value=a;
        }
        function seven()
        {
            var a=document.getElementById("text").value;
            var a=a+7;
            document.getElementById("text").value=a;
        }
        function eigth()
        {
            var a=document.getElementById("text").value;
            var a=a+8;
            document.getElementById("text").value=a;
        }
        function nine()
        {
            var a=document.getElementById("text").value;
            var a=a+9;
            document.getElementById("text").value=a;
        }
        function sum()
        {
            var a=document.getElementById("text").value;
            var a=(a+"+");
            document.getElementById("text").value=a;
        }       
        function sub()
        {
            var a=document.getElementById("text").value;
            var a=(a+"-");
            document.getElementById("text").value=a;
        }       
        function mul()
        {
            var a=document.getElementById("text").value;
            var a=(a+"*");
            document.getElementById("text").value=a;
        }       
        function div()
        {
            var a=document.getElementById("text").value;
            var a=(a+"/");
            document.getElementById("text").value=a;
        }       
        function mod()
        {
            var a=document.getElementById("text").value;
            var a=(a+"%");
            document.getElementById("text").value=a;
        }
        function dot()
        {
            var a=document.getElementById("text").value;
            var a=(a+".");
            document.getElementById("text").value=a;
        }       
        function back() 
        {
            var a = document.getElementById("text").value;
            document.getElementById("text").value = a.substring(0, a.length - 1);
        }
        function equal()
        {
            var a;
            a=eval(document.getElementById("text").value);
            document.getElementById("text").value=a;
        }
