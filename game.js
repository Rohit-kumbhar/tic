var start = false;
var r = true;
var tog;
var computer = false;
var human = true;
var Restart = false;
var submit = [false,false,false,false,false,false,false,false,false];
var done = false;



function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


function clicked(){
    if(Restart || document.getElementById("start").innerHTML == "End")
    {
        Restart = false;
        location.reload();
    }

    if(start == true)
    {

        start = false;
        document.getElementById("start").innerHTML = "Start";
    }
    else
    {
        document.getElementById('player_name').innerHTML ='Player 1';
        tog = true;
        start = true;
        document.getElementById("start").innerHTML = "End";
    }
    
}



function play_computer()
{
    console.log("entered in function");
    if(computer == false){
    computer = true;
    document.getElementById('computer').innerHTML = 'Computer is Playing';
    }
    else
    {
        computer = false;
        document.getElementById('computer').innerHTML = 'Play with computer';
    }
    

}

function change(id)
{
    if(!done){


    var x;
    var y;
    var z;// x = i + j y = i z= j
    document.getElementById('game_discription').innerHTML ='';
    if(id == 'b00'){
          x = 0;
          y = 0;
          z = 0;
         
        }
        else if(id == 'b01'){
            x = 1;
            y = 0;
            z = 1;
        }
        else if(id == 'b02'){
            x = 2;
            y = 0;
            z = 2;
        }
        else if(id == 'b10'){
            x = 1;
            y = 1;
            z = 0;
        }
        else if(id == 'b11'){
            x = 2;
            y = 1;
            z = 1;
        }
        else if(id == 'b12'){
            x = 3;
            y = 1;
            z = 2;
        }
        else if(id == 'b20'){
            x = 2;
            y = 2;
            z = 0;}
        else if(id == 'b21'){
            x = 3;
            y = 2;
            z = 1;
        }
        else if(id == 'b22'){
            x = 4;
            y = 2;
            z = 2;
        }
   
    var w;
    if(y == 0)
    {
        if(z == 0)
        {
            w = 0;
        }
        else if(z == 1)
        {
            w = 1;
        }
        else
        {
            w = 2;
        }
    }
    else if(y == 1)
    {
        if(z == 0)
        {
            w = 3;
        }
        else if(z == 1)
        {
            w = 4;
        }
        else
        {
            w = 5;
        }
    }
    else
    {
        if(z == 0)
        {
            w = 6;
        }
        else if(z == 1)
        {
            w = 7;
        }
        else
        {
            w = 8;
        }
    }

    // main logic
    
    if(tog && start && (submit[w] == false))
    {
       // console.log("entered in")
        if(computer)
        {
            document.getElementById('player_name').innerHTML ='Computer is Playing';
        }
        else
        {
            document.getElementById('player_name').innerHTML ='Player 2';
        }
        
        tog = false
        submit[w] = true;
     
        document.getElementById("b").style.backgroundColor = "Black";
        document.getElementById('player_name').style.color = "White";
        document.getElementById("start").style.backgroundColor = "White";
        document.getElementById('start').style.color = 'Black';
        document.getElementById("computer").style.backgroundColor = "White";
        document.getElementById('computer').style.color = 'Black';


        document.getElementById('b'+y+z).innerHTML ='X';

    
            for(var ai = 0;ai < 3;ai++)
            {
                for(var aj = 0;aj < 3;aj++)
                {
                    if(((aj == 0 || aj == 2) && (ai == 0 || ai == 2)) || (ai == 1 && aj == 1))
                    {
                        document.getElementById('b'+ai+aj).style.backgroundColor = "White";
                        document.getElementById('b'+ai+aj).style.color = 'Black';
                
                    }
                    else{
                        document.getElementById('b'+ai+aj).style.backgroundColor = "Black";
                        document.getElementById('b'+ai+aj).style.color = 'White';
                      
                    }
                }
            }
           
          
    }
    else if(start && (submit[w] == false))
    {
        document.getElementById('player_name').innerHTML ='Player 1';
        document.getElementById('player_name').style.color = "Black";
        tog = true;
        submit[w] = true;
        
        document.getElementById("b").style.backgroundColor = "White";
        document.getElementById("start").style.backgroundColor = "Black";
        document.getElementById('start').style.color = 'White';
        document.getElementById("computer").style.backgroundColor = "Black";
        document.getElementById('computer').style.color = 'White';


        document.getElementById('b'+y+z).innerHTML ='O';


        for(var ai = 0;ai < 3;ai++)
        {
            for(var aj = 0;aj < 3;aj++)
            {
                if(!((aj == 0 || aj == 2) && (ai == 0 || ai == 2)) || (ai == 1 && aj == 1))
                {
                    document.getElementById('b'+ai+aj).style.backgroundColor = "White";
                    document.getElementById('b'+ai+aj).style.color = 'Black';
            
                }
                else{
                    document.getElementById('b'+ai+aj).style.backgroundColor = "Black";
                    document.getElementById('b'+ai+aj).style.color = 'White';
                  
                }
            }
        }



    }
    else if(start == false)
    {
        alert("kindly press the start button to play");
    }
    else if(submit[w] == true)
    {
        document.getElementById('game_discription').style.color = 'Red';
        document.getElementById('game_discription').innerHTML ='Already Marked';
    }




    





    var i;
    var j;
    var jv;
    var t1,t2,t3;
    for(i = 0;i < 3;i ++)
    {
        t1 = -1;
        t2 = -1;
        t3 = -1;
       
        //t4 = 0;
        for(j = 0;j < 3 && !done;j++)
        {
            if(document.getElementById('b'+i+j).innerHTML == 'X')
            {
                t1++;
            }
            if(document.getElementById('b'+j+i).innerHTML == 'X')
            {
                t2++;
            }
            if(document.getElementById('b'+j+j).innerHTML == 'X')
            {
                t3++;
            }
            if((document.getElementById('b02').innerHTML == 'X' && document.getElementById('b11').innerHTML == 'X' && document.getElementById('b20').innerHTML == 'X' ))
            {
             
                document.getElementById('game_discription').style.color = 'Green';
                if(computer)
                {
                    document.getElementById('game_discription').innerHTML ='You Won';
                }
                else
                {
                    document.getElementById('game_discription').innerHTML ='Player 1 won';
                }
                done = true;
            }
            if((t1 == 2)||(t2 == 2)||(t3 == 2))
            {
                
                document.getElementById('game_discription').style.color = 'Green';
                if(computer)
                {
                    document.getElementById('game_discription').innerHTML ='You Won';
                }
                else
                {
                    document.getElementById('game_discription').innerHTML ='Player 1 won';
                }
                done = true;
                document.getElementById("start").style.backgroundColor = "Red";
                document.getElementById('start').style.color = 'White';
                document.getElementById('start').innerHTML = 'ReStart';
                Restart = true;

            }
           
        }

       
    }




    // to check id draw
    var count = -1;
    //done = false;
    for(var rk = 0;rk < 9;rk++)
    {
        if(submit[rk])
        {
            count++;
        }
    }
    if(count == 8 && !done)
    {
        document.getElementById('game_discription').innerHTML ='Draw';
        document.getElementById('game_discription').style.color = 'Blue';
    }
    else
    {
        count = -1;
    }


    for(i = 0;i < 3;i ++)
    {
        t1 = -1;
        t2 = -1;
        t3 = -1;
        //t4 = 0;
        for(j = 0;j < 3 && !done;j++)
        {
            if(document.getElementById('b'+i+j).innerHTML == 'O')
            {
                t1++;
            }
            if(document.getElementById('b'+j+i).innerHTML == 'O')
            {
                t2++;
            }
            if(document.getElementById('b'+j+j).innerHTML == 'O')
            {
                t3++;
            }
            if((document.getElementById('b02').innerHTML == 'O' && document.getElementById('b11').innerHTML == 'O' && document.getElementById('b20').innerHTML == 'O' ))
            {
                
                document.getElementById('game_discription').style.color = 'Green';
                if(computer)
                {
                    document.getElementById('game_discription').innerHTML ='Computer Won';
                }
                else
                {
                    document.getElementById('game_discription').innerHTML ='Player 2 won';
                }
                done = true;
            }
            if((t1 == 2)||(t2 == 2)||(t3 == 2))
            {
               
                document.getElementById('game_discription').style.color = 'Green';
                if(computer)
                {
                    document.getElementById('game_discription').innerHTML ='Computer Won';
                }
                else
                {
                    document.getElementById('game_discription').innerHTML ='Player 2 won';
                }
                done = true;
                

                document.getElementById("start").style.backgroundColor = "Red";
                document.getElementById('start').style.color = 'White';
                document.getElementById('start').innerHTML = 'ReStart';
                Restart = true;
            }
        }
    }


    // to check id draw
    var count = -1;
   // var done = false;
    for(var rk = 0;rk < 9;rk++)
    {
        if(submit[rk])
        {
            count++;
        }
    }
    if(count == 8 && !done)
    {
        document.getElementById('game_discription').innerHTML ='Draw';
        document.getElementById('game_discription').style.color = 'Blue';
    }
    else
    {
        count = -1;
    }

    if(computer)
    {
        human = false;
    }











if(!human)
{
    //sleep(2000);

    console.log("computer playing");    
    human = true;
    var w;
    var d = false;
    while(submit[w] == true && !d)
    {
        var y = Math.floor((Math.random() * 3) + 0);
        var z = Math.floor((Math.random() * 3) + 0);
        if(y == 0)
        {
            if(z == 0)
            {
                w = 0;
            }
            else if(z == 1)
            {
                w = 1;
            }
            else
            {
                w = 2;
            }
        }
        else if(y == 1)
        {
            if(z == 0)
            {
                w = 3;
            }
            else if(z == 1)
            {
                w = 4;
            }
            else
            {
                w = 5;
            }
        }
        else
        {
            if(z == 0)
            {
                w = 6;
            }
            else if(z == 1)
            {
                w = 7;
            }
            else
            {
                w = 8;
            }
        }



    var count = -1;
    for(var rk = 0;rk < 9;rk++)
    {
        if(submit[rk])
        {
            count++;
        }
    }
    if(count == 8)
    {
        d = true;
    }


    }
    //commenting temp
   /* 
    if(tog && start && (submit[w] == false))
    {
       
        document.getElementById('player_name').innerHTML ='Computer';
        tog = false
        submit[w] = true;
      
        document.getElementById("b").style.backgroundColor = "Black";
        document.getElementById('player_name').style.color = "White";
        document.getElementById("start").style.backgroundColor = "White";
        document.getElementById('start').style.color = 'Black';
        document.getElementById("computer").style.backgroundColor = "White";
        document.getElementById('computer').style.color = 'Black';


        document.getElementById('b'+y+z).innerHTML ='X';

    

        for(var ai = 0;ai < 3;ai++)
        {
            for(var aj = 0;aj < 3;aj++)
            {
                if(!((aj == 0 || aj == 2) && (ai == 0 || ai == 2)) || (ai == 1 && aj == 1))
                {
                    document.getElementById('b'+ai+aj).style.backgroundColor = "White";
                    document.getElementById('b'+ai+aj).style.color = 'Black';
            
                }
                else{
                    document.getElementById('b'+ai+aj).style.backgroundColor = "Black";
                    document.getElementById('b'+ai+aj).style.color = 'White';
                  
                }
            }
        }




        for(var ai = 0;ai < 3;ai++)
        {
            for(var aj = 0;aj < 3;aj++)
            {
                if(!((aj == 0 || aj == 2) && (ai == 0 || ai == 2)) || (ai == 1 && aj == 1))
                {
                    document.getElementById('b'+ai+aj).style.backgroundColor = "White";
                    document.getElementById('b'+ai+aj).style.color = 'Black';
            
                }
                else{
                    document.getElementById('b'+ai+aj).style.backgroundColor = "Black";
                    document.getElementById('b'+ai+aj).style.color = 'White';
                  
                }
            }
        }
            
    }   */
/*else if(start && (submit[w] == false))
    {*/
        document.getElementById('player_name').innerHTML ='Player 1';
        document.getElementById('player_name').style.color = "Black";
        tog = true;
        submit[w] = true;
        /*document.getElementById('b'+y+z).style.backgroundColor = "Black";
        document.getElementById('b'+y+z).style.color = 'White';*/
        document.getElementById("b").style.backgroundColor = "White";
        document.getElementById("start").style.backgroundColor = "Black";
        document.getElementById('start').style.color = 'White';
        document.getElementById("computer").style.backgroundColor = "Black";
        document.getElementById('computer').style.color = 'White';


        document.getElementById('b'+y+z).innerHTML ='O';


        

        for(var ai = 0;ai < 3;ai++)
        {
            for(var aj = 0;aj < 3;aj++)
            {
                if(((aj == 0 || aj == 2) && (ai == 0 || ai == 2)) || (ai == 1 && aj == 1))
                {
                    console.log("came at" + ai + aj);
                    document.getElementById('b'+ai+aj).style.backgroundColor = "White";
                    document.getElementById('b'+ai+aj).style.color = 'Black';
            
                }
                else{
                    document.getElementById('b'+ai+aj).style.backgroundColor = "Black";
                    document.getElementById('b'+ai+aj).style.color = 'White';
                  
                }
            }
        }



  //  }
  /*
    else if(start == false)
    {
        alert("kindly press the start button to play");
    }
    else if(submit[w] == true)
    {
        document.getElementById('game_discription').style.color = 'Red';
        document.getElementById('game_discription').innerHTML ='Already Marked';
    }*/




    var i;
    var j;
    var jv;
    var t1,t2,t3;
    for(i = 0;i < 3;i ++)
    {
        t1 = -1;
        t2 = -1;
        t3 = -1;
        
        //t4 = 0;
        for(j = 0;j < 3 && !done;j++)
        {
            if(document.getElementById('b'+i+j).innerHTML == 'X')
            {
                t1++;
            }
            if(document.getElementById('b'+j+i).innerHTML == 'X')
            {
                t2++;
            }
            if(document.getElementById('b'+j+j).innerHTML == 'X')
            {
                t3++;
            }
            if((document.getElementById('b02').innerHTML == 'X' && document.getElementById('b11').innerHTML == 'X' && document.getElementById('b20').innerHTML == 'X' ))
            {
            
                document.getElementById('game_discription').style.color = 'Green';
                if(computer)
                {
                    document.getElementById('game_discription').innerHTML ='You Won';
                }
                else
                {
                    document.getElementById('game_discription').innerHTML ='Player 1 won';
                }
                document.getElementById('start').innerHTML = 'ReStart';
                document.getElementById("start").style.backgroundColor = "Red";
                document.getElementById('start').style.color = 'White';
                
                done = true;
            }
            if((t1 == 2)||(t2 == 2)||(t3 == 2))
            {
                document.getElementById('game_discription').style.color = 'Green';
                if(computer)
                {
                    document.getElementById('game_discription').innerHTML ='You Won';
                }
                else
                {
                    document.getElementById('game_discription').innerHTML ='Player 1 won';
                }
                done = true;
                document.getElementById('start').innerHTML = 'ReStart';
                document.getElementById("start").style.backgroundColor = "Red";
                document.getElementById('start').style.color = 'White';
                
                Restart = true;

            }
        }

    }




    // to check id draw
    var count = -1;
   // var done = false;
    for(var rk = 0;rk < 9;rk++)
    {
        if(submit[rk])
        {
            count++;
        }
    }
    if(count == 8 && !done)
    {
        document.getElementById('game_discription').innerHTML ='Draw';
        document.getElementById('game_discription').style.color = 'Blue';
        document.getElementById('start').innerHTML = 'ReStart';
        document.getElementById("start").style.backgroundColor = "Red";
                document.getElementById('start').style.color = 'White';
                
    }
    else
    {
        count = -1;
    }

//checkin if won


    for(i = 0;i < 3 & !done;i ++)
    {
        t1 = -1;
        t2 = -1;
        t3 = -1;
        //t4 = 0;
        for(j = 0;j < 3;j++)
        {
            if(document.getElementById('b'+i+j).innerHTML == 'O')
            {
                t1++;
            }
            if(document.getElementById('b'+j+i).innerHTML == 'O')
            {
                t2++;
            }
            if(document.getElementById('b'+j+j).innerHTML == 'O')
            {
                t3++;
            }
            if((document.getElementById('b02').innerHTML == 'O' && document.getElementById('b11').innerHTML == 'O' && document.getElementById('b20').innerHTML == 'O' ))
            {
                document.getElementById('game_discription').style.color = 'Green';
                if(computer)
                {
                    document.getElementById('game_discription').innerHTML ='Computer Won';
                }
                else
                {
                    document.getElementById('game_discription').innerHTML ='Player 2 won';
                }


                
                document.getElementById('start').innerHTML = 'ReStart';
                document.getElementById("start").style.backgroundColor = "Red";
                document.getElementById('start').style.color = 'White';

                done = true;
            }
            if((t1 == 2)||(t2 == 2)||(t3 == 2))
            {
                
                document.getElementById('game_discription').style.color = 'Green';
                if(computer)
                {
                    document.getElementById('game_discription').innerHTML ='Computer Won';
                }
                else
                {
                    document.getElementById('game_discription').innerHTML ='Player 2 won';
                }

                done = true;

                
                document.getElementById('start').style.color = 'White';
                document.getElementById('start').innerHTML = 'ReStart';
                document.getElementById("start").style.backgroundColor = "Red";
                Restart = true;
            }
        }
    }





    // to check id draw
    var count = -1;
    //var done = false;
    for(var rk = 0;rk < 9;rk++)
    {
        if(submit[rk])
        {
            count++;
        }
    }
    if(count == 8 && !done)
    {
        document.getElementById('game_discription').innerHTML ='Draw';
        document.getElementById('game_discription').style.color = 'Blue';

        
                document.getElementById('start').style.color = 'White';
                document.getElementById('start').innerHTML = 'ReStart';
                document.getElementById("start").style.backgroundColor = "Red";
    }
    else
    {
        count = -1;
    }



    
}





    }
    else
    {
        document.getElementById('game_discription').style.color = 'Red';
        document.getElementById('game_discription').innerHTML ='Game Over, Please restart';
        
    }





}








