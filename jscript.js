onload=main;
var map=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],i,j,k=0,output;
function main()
{
    initialise();
    display();
}
function initialise()
{
    output=document.getElementsByClassName("cell");
    placerandom(2);
}
function display()
{
    k=0;
    for(i=0;i<4;i++)
    {
        for(j=0;j<4;j++)
        {
                    if(map[i][j]==0)
            {
                output[k].style.background="white";
                output[k++].innerHTML=null;
            }
            else
            {    
               output[k].style.animationName="fadein";
               var el=output[k].cloneNode(true);
                output[k].parentNode.replaceChild(el,output[k]);
                output[k].style.background=colour();
                output[k++].innerHTML=map[i][j]
            }
        }
    }
}

function play(n)
{
    var flag=false;
    switch(n)
    {
    case 1:
    for(i=1;i<4;i++)
    {
        for(j=0;j<4;j++)
        {
            k=i;
            if(map[i][j]!=0)
            {
                while((k>0)&&((map[k-1][j]==0)||(map[k-1][j]==map[k][j])))
                {
                    if(map[k-1][j]==0)
                    {
                        map[k-1][j]=map[k][j];
                        map[k][j]=0;
                        flag=true;
                    }
                    else
                    {
                        map[k-1][j]*=2;
                        map[k][j]=0;
                        flag=true;
                        break;
                    }
                    k=k-1;
                }
            }
        }
    }
    if(!flag)
    {
        gameover();
        break;
    }
    placerandom(2);
    display();
    break;
    case 2:
    for(j=1;j<4;j++)
    {
        for(i=0;i<4;i++)
        {
            k=j;
            if(map[i][j]!=0)
            {
                while((k>0)&&((map[i][k-1]==0)||(map[i][k-1]==map[i][k])))
                {
                    if(map[i][k-1]==0)
                    {
                        map[i][k-1]=map[i][k];
                        map[i][k]=0;
                        flag=true;
                    }
                    else
                    {
                        map[i][k-1]*=2;
                        map[i][k]=0;
                        flag=true;
                        break;
                    }
                    k=k-1;
                }
            }
        }
    }
    if(!flag)
    {
        gameover();
        break;
    }
    placerandom(2);
    display();
    break;
    case 3:
    for(j=3;j>=0;j--)
    {
        for(i=0;i<4;i++)
        {
            k=j;
            if(map[i][j]!=0)
            {
                while((k<3)&&((map[i][k+1]==0)||(map[i][k+1]==map[i][k])))
                {
                    if(map[i][k+1]==0)
                    {
                        map[i][k+1]=map[i][k];
                        map[i][k]=0;
                        flag=true;
                    }
                    else
                    {
                        map[i][k+1]*=2;
                        map[i][k]=0;
                        flag=true;
                        break;
                    }
                    k=k+1;
                }
            }
        }
    }
    if(!flag)
    {
        gameover();
        break;
    }
    placerandom(2);
    display();
    break;
    case 4:
    for(i=3;i>=0;i--)
    {
        for(j=0;j<4;j++)
        {
            k=i;
            if(map[i][j]!=0)
            {
                while((k<3)&&((map[k+1][j]==0)||(map[k+1][j]==map[k][j])))
                {
                    if(map[k+1][j]==0)
                    {
                        map[k+1][j]=map[k][j];
                        map[k][j]=0;
                        flag=true;
                    }
                    else
                    {
                        map[k+1][j]*=2;
                        map[k][j]=0;
                        flag=true;
                        break;
                    }
                    k=k+1;
                }
            }
        }
    }
    if(!flag)
    {
        gameover();
        break;
    }
    placerandom(2);
    display();
    break;
    }
}
function gameover()
{
    if(emptycells()==0)
    {
        alert("|GAME OVER|");
    }
}
function placerandom(n)
{
    k=Math.floor(Math.random()*emptycells()+1);
    for(i=0;i<4;i++)
    {
        for(j=0;j<4;j++)
        {
            if(map[i][j]==0)
            {
                k=k-1;
            }
            if(k==0)
            {
                break;
            }

        }
        if(k==0)
        {
            break;
        }
    }
    map[i][j]=2;        
}
function emptycells()
{
    k=0;
    for(i=0;i<4;i++)
    {
        for(j=0;j<4;j++)
        {
            if(map[i][j]==0)
                {
                    k++;
                }
        }
    }
    return k;
}
function colour()
{
    switch(map[i][j])
    {
    case 2:
    return "orange";
    break;
    case 4:
    return "red";
    break;
    case 8:
    return "pink";
    break;
    case 16:
    return "blue";
    break;
    case 32:
    return "green";
    break;
    case 64:
    return "purple";
    break;
    case 128:
    return "brown";
    break;
    case 256:
    return "skyblue";
    break;
    case 512:
    return "magenta";
    break;
    case 1024:
    return "silver";
    break;
    case 2048:
    return "gold";
    break;
    default:
    return "black";
    }
}