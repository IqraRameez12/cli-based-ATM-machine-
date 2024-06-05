import inquirer from "inquirer";
import chalk from "chalk";

let myBalance=5000;
let myPin=1335;

let pinAnswer=await inquirer .prompt([
    {

        name:"pin",
        type:"number",
        message:"Enter your pin number",
    
    },
]);

//conditional statment:

if(pinAnswer.pin===myPin){
    console.log(chalk.green("correct pin code"));


let operationAnswer=await inquirer.prompt([
    {

        name:"operation",
        type:"list",
        message:"Plese select option",
        choices:["withdraw","checkbalance"],
    
    }

 ]);
//  console.log(operationAnswer);


//conditional statment:

if(operationAnswer.operation==="withdraw"){
 
    let amountAnswer=await inquirer.prompt([
        {

            name:"amount",
            type:"number",
            message:"Enter your amount"
        },

    ]);

myBalance-=amountAnswer.amount;
console.log(chalk.green(`your balance is:  ${myBalance }`));


}else if(operationAnswer.operation==="checkbalance"){

    console.log(chalk.green(`your balance is:  ${myBalance}`));
}

}else{
    console.log(chalk.green("incorrect pin code"));

};


