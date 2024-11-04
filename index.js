var arr =[]
        
    function operate(num)
    {  
        document.getElementById("userinput").value += num
        arr.push(num)     
    } 

    function calculation()
    {
        
        let input1 = document.getElementById("userinput").value
        let calc1=""
        let calc2=""
        let result=0        

        
        for (i=0; i<arr.length;i++)
        {
            if(arr[i]=="+" || arr[i]=="-" || arr[i]=="x" || arr[i]=="/")
            {
                for (j=i+1; j<arr.length;j++)
                    {
                        calc2=calc2+(arr[j])
                    }
            }

            if(arr[i]=="+")
            {                
                document.getElementById("userinput").value= ((calc1)*1)+ (calc2)*1                    
                break;
            }
            else if(arr[i]=="-")
            {                
                document.getElementById("userinput").value= ((calc1)*1)- (calc2)*1
                break;
            }
            else if(arr[i]=="x")
            {                
                result = document.getElementById("userinput").value= ((calc1)*1)* (calc2)*1
                break;
            }
            else if(arr[i]=="/")
            {                
                document.getElementById("userinput").value= ((calc1)*1)/ (calc2)*1
                break;
            } 
            else
            {
                calc1=calc1+(arr[i])
            }
        }
    }

    

    function reset()
    {            
        document.getElementById("userinput").value=""
        arr=[]
    }
