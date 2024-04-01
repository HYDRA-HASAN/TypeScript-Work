import inquirer from "inquirer";
import  { createSpinner }  from "nanospinner";
import chalk from "chalk";
import Animation from "chalk-animation";
import figlet from "figlet";

  let Animation0 = ()=> {
    return new Promise((Animation1)=>{
        setTimeout(Animation1,5000);
    });
  };

  let Animationtitle1 = Animation.rainbow("Starting Your Adventure Game!");
  await Animation0();
  Animationtitle1.stop();

  let Text2 = figlet.textSync("Adventure Game !",{
    font:"Slant",
    });

  console.log(chalk.bold(chalk.hex('#9e1b32')(Text2)));

    interface TypeData {
        menu: string,
        Difficulty: string,
        Target1: string,
        Leo: string,
        EliminationMethod: string,
        Target2: string,
        Restart: string,
        Target3: string,
        EliminationMethodDavid: string,
        exit: string,
        Exit: string,
        ZombieGameRestart: string,
    }

    // Color List Start:
    const Titlecolor =chalk.bold.redBright;
    const Titlecolor1 = chalk.bold.greenBright;
    const Titlecolor2 = chalk.bold.blueBright;
    const color1 = chalk.bold.redBright;
    const color2 = chalk.bold.blueBright;
    const color4 = chalk.bold.whiteBright;
    const color3 = chalk.bold.hex('#ffe700');
    const color5 = chalk.bold.yellowBright;
    const color6 = chalk.bold.magenta;
    const color7 = chalk.bold.hex("#ff970f");
   // Color List End:

   let Animation1 = ()=> {
    return new Promise((Animation1)=>{
        setTimeout(Animation1,5000);
    });
  };

  let Animationtitle2 = Animation.rainbow("Start Adventure Game !");
  await Animation1();
  Animationtitle2.stop();

    const SPINNERANIMATION = async() => {
      const spinner = createSpinner();
      spinner.start({text: color3("Healing...")}); 
      await new Promise(Animation => setTimeout(Animation, 800));
      spinner.stop();
    };

    const Titlespinner = async() => {
      const spinner = createSpinner();
      spinner.start(); 
      await new Promise(Animation => setTimeout(Animation, 4000));
      spinner.stop();
      console.clear();
    }

    let Title = async (YourGameType: string) => {
      await Titlespinner();
        console.log(color4('<<================================================================>>'));
        console.log(color4(`<<================>> ${Titlecolor1(`WELCOME TO ( ${YourGameType} ) ADVENTURE GAME:`)} <<=================>>`)); 
        console.log(color4('<<================================================================>>'));
        
    };


    const AdventuregameSpinnerAnimation = async () => {
      const spinner = createSpinner();
      spinner.start(); 
      await new Promise(Animation => setTimeout(Animation, 5000));
      spinner.stop();
      console.clear();
    }
    
    const AssassinGameAnimation = async () => {
      const spinner = createSpinner();
      spinner.start(); 
      await new Promise(Animation => setTimeout(Animation, 6000));
      spinner.stop();
      console.clear();
    }


    const ADVENTURE_GAME= async () =>{
   await AdventuregameSpinnerAnimation();
    const AdventureGameType: TypeData = await inquirer.prompt([
        {
            message: Titlecolor1("Choose Your Game Type:"),
            name: "menu",
            type:"list",
            choices: [
                {name:  color2("Assassin Game:".toUpperCase()), value: "ASSASSIN:"},
                {name:  color1("Zombie Game:".toUpperCase()), value: "ZOMBIE GAME:"},
                {name:  color1("Exit:".toUpperCase()), value: "Exit"},
            ],
        },
    ]);


    const AssassinGame = async () => {
      await AssassinGameAnimation();
        async function GameOn() {
        const ACTION:TypeData = await inquirer.prompt([
        {   message: color2("Select Your Difficulty:"),
            name: "Difficulty",
            type: "list",
            choices: [
                {name: Titlecolor1("Easy: [Time Limit] - [20 - Seconds]:".toUpperCase()), value: "Easy"},
                {name: Titlecolor1("Medium: [Time Limit] - [15 - Seconds]:".toUpperCase()), value: "Medium"},
                {name: Titlecolor1("Hard: [Time Limit] - [10 - Seconds]:".toUpperCase()), value: "Hard"},
                {name: color5("Go Back To main menu:".toUpperCase()), value: "Go Back To main menu"},
            ],
        },
        ]);



        if (ACTION.Difficulty === "Easy"){

            const Leotarget:TypeData = await inquirer.prompt([
                {
                    message: Titlecolor("Select Your Target List:"),
                    name: "Leo",
                    type: "list",
                    choices: [
                        { name: Titlecolor("Leo:".toUpperCase()), value: "Leo" },
                        {name: color5("Go Back To main menu:".toUpperCase()), value: "Go Back To main menu"},
                    ]
                },
            ]);
            if (Leotarget.Leo === "Go Back To main menu") {
              return GameOn(); 
            }


            console.log(Titlecolor(`You Successfully Selected The Target: ${Leotarget.Leo}`.toUpperCase()));



            const Target1Leo:TypeData = await inquirer.prompt([
                {
                    message: Titlecolor1(`Select How You Want to Eliminate the Target (You have 20 seconds):`),
                    name: "Target1",
                    type: "list",
                    choices: [
                      { name: Titlecolor("Running Car:".toUpperCase()), value: "Car" },
                      { name: Titlecolor("Shoot with a Sniper:".toUpperCase()), value: "Sniper" },
                      { name: Titlecolor("Kill with a Bomb:".toUpperCase()), value: "Bomb" },
                      {name: color5("Go Back To main menu:".toUpperCase()), value: "Go Back To main menu"},
                    ],
                },
            ]);

            if (Target1Leo.Target1 === "Go Back To main menu"){
                return GameOn();
            }

            if (Target1Leo.Target1) { 
                let Player_Health = 12;
                let Enemy_Health = 1;
                console.log(Titlecolor(`You have chosen to eliminate Leo with ${Target1Leo.Target1}.`));
                console.log(Titlecolor1(`Player Health: ${Player_Health}`));
                console.log(Titlecolor(`Enemy Health: ${Enemy_Health}`));

                const LimitedTime = 20000; 
                let Target1 = false;

                const ProgressBarTimer = 700;
                const TotalTimer = LimitedTime / ProgressBarTimer;
                let Countdowntimer = 0;
              
                function Target1EasyLeo() {
                    Countdowntimer++;
                  


                    const progresstimer = (Countdowntimer / TotalTimer) * 100;

                    const progressBartimer = ">>".repeat(Math.floor(progresstimer / 2));

                    const remainingtimer = " ".repeat(50 - Math.floor(progresstimer / 2));

                    process.stdout.write(Titlecolor1(`\r_____You______ ${progressBartimer}${remainingtimer} ${Titlecolor(`|TARGET|`)}`));
                  
                    if (Countdowntimer >= TotalTimer) {
                      clearInterval(sleep);
                  
                      const RandomChanceEnemyCanKillYou = Math.random();

                      if (RandomChanceEnemyCanKillYou < 0.7) {
                        Target1 = true; 
                      } 
                      else {
                        Target1 = false; 
                      }
                  
                      if (Target1) {
                        console.log(Titlecolor1(`\nYou have successfully eliminated the target Leo!`));
                        Enemy_Health = 0;
                        console.log(Titlecolor1(`Enemy Health: ${Enemy_Health}`));
                      } 
                      else {
                        console.log(Titlecolor(`\nPolice have been spotted You!`));
                        console.log(Titlecolor(`\nPolice Eliminated you.`));
                        Player_Health = 0;
                        console.log(Titlecolor(`Player Health: ${Player_Health}`));
                      }
                      Repetation();
                    }
                  }
                  
                  const sleep = setInterval(Target1EasyLeo, ProgressBarTimer);
              
              }


              
              
        };

        

        if (ACTION.Difficulty === "Medium"){
            const Wilsontarget:TypeData = await inquirer.prompt([
                {
                    message: Titlecolor("Select Your Target List:"),
                    name: "Target2",
                    type: "list",
                    choices: [
                        { name: Titlecolor("Wilson:".toUpperCase()), value: "Wilson" },
                        {name: color5("Go Back To main menu:".toUpperCase()), value: "Go Back To main menu"},
                    ],
                },
            ]);

                if(Wilsontarget.Target2 === "Go Back To main menu"){
                    return GameOn();
                };


            const Target2Wilson:TypeData = await inquirer.prompt([
                {
                    message: Titlecolor1("Select How You Want to Eliminate the Target (You have 15 seconds):"),
                    name: "EliminationMethod",
                    type: "list",
                    choices: [
                        {name: Titlecolor("Kill a Target Using Sniper:".toUpperCase()), value: "Kill a Target Using Sniper"},
                        {name: Titlecolor("Kill a Target using AKM:".toUpperCase()),value: "Kill a Target using AKM"},
                        {name: Titlecolor("Kill a Target using a sniper but drop with container:".toUpperCase()),value: "Kill a Target using a sniper but drop with container"},
                        {name: color5("Go Back To main menu:".toUpperCase()), value: "Go Back To main menu"},
                    ]
                }
            ]);

            if(Target2Wilson.EliminationMethod === "Go Back To main menu"){
                return GameOn();
            };

            if (Target2Wilson.EliminationMethod) {
                let Player_Health = 10;
                let Enemy_Health = 14;
                let targetname = "Wilson";
                console.log(Titlecolor(`You have chosen to eliminate Wilson with ${Target2Wilson.EliminationMethod}.`));
                console.log(Titlecolor1(`Player Health: ${Player_Health}`));
                console.log(Titlecolor(`Enemy Health: ${Enemy_Health}`));
              
                let Timelimited = 15000;
                let Target2 = false;
                const ProgressBarAnimateTimer = 800;
                let countedtime = 0;
              
                const MediumWilson = async () => {
                  countedtime += ProgressBarAnimateTimer;
                  const progressgametimer = (countedtime / Timelimited) * 100;
                  let Progressbartimer = ">>".repeat(Math.floor(progressgametimer / 2));
                  let remaningtimer = " ".repeat(50 - Math.floor(progressgametimer / 2));
                  process.stdout.write(Titlecolor1(`\n_____You______ ${Progressbartimer}${remaningtimer} ${Titlecolor(`|TARGET|`)}`));
                    
                  
                  if (countedtime >= Timelimited) {
                    clearInterval(sleep1);
              
                    const RandomChanceEnemyCanKillYou2 = Math.random();
              
                    if (RandomChanceEnemyCanKillYou2 < 0.5) {
                      Target2 = true;
                    } 
                    else {
                      Target2 = false;
                    }
              
                    if (Target2) {
                      console.log(Titlecolor1(`\nYou have successfully eliminated the target ${targetname}`));
                      Enemy_Health = 0;
                      console.log(Titlecolor1(`Enemy Health: ${Enemy_Health}`));
                    } 
                    else {
                      console.log(Titlecolor(`Police have been spotted You!`));
                      console.log(Titlecolor(`Police Eliminated you.`));
                      Player_Health = 0;
                      console.log(Titlecolor(`Player Health: ${Player_Health}`));
                    }
                    Repetation();
                    
                  }
                  
                };
              
                const sleep1 = setInterval(MediumWilson, ProgressBarAnimateTimer);
              
            }
            }
            
            

        if (ACTION.Difficulty === "Hard"){
            const Davidtarget:TypeData = await inquirer.prompt([
                {
                    message: Titlecolor("Select Your Target List:"),
                    name: "Target3",
                    type: "list",
                    choices: [
                        {name: Titlecolor("David:".toUpperCase()), value: "David" },
                        {name: color5("Go Back To main menu:".toUpperCase()), value: "Go Back To main menu"},
                    ]
                },
            ]);

            if(Davidtarget.Target3 === "Go Back To main menu"){
                return GameOn();
            };


            const Target3David:TypeData = await inquirer.prompt([
                {
                    message: Titlecolor("Select How You Want to Eliminate the Target (You have 10 seconds):"),
                    name: "EliminationMethodDavid",
                    type: "list",
                    choices: [
                        {name: Titlecolor("Kill a Target Using Sniper:".toUpperCase()), value: "Kill a Target Using Sniper"},
                        {name: color5("Go Back To main menu:".toUpperCase()), value: "Go Back To main menu"},
                    ],
                },
            ]);

            if(Target3David.EliminationMethodDavid === "Go Back To main menu"){
                return GameOn();
            };

            if (Target3David.EliminationMethodDavid) {
                let Player_Health = 5;
                let Enemy_Health = 18;
                let targetname = "David";
                console.log(Titlecolor(`You have chosen to eliminate Wilson with ${Target3David.EliminationMethodDavid}.`));
                console.log(Titlecolor1(`Player Health: ${Player_Health}`));
                console.log(Titlecolor(`Enemy Health: ${Enemy_Health}`));
            
                let Timelimited1 = 10000;
                let Target3 = false;
                const ProgressBarAnimateTimer1 = 900;
                let countedtime1 = 0;
            
                const MediumWilson1 = async () => {
                    countedtime1 += ProgressBarAnimateTimer1;
                    const progressgametimer1 = (countedtime1 / Timelimited1) * 100;
                    const progressgamebar1 = Math.floor(progressgametimer1 / 2);
                    let Progressbartimer1 = ">>".repeat(progressgamebar1);
                    let remaningtimer = " ".repeat(50 - Math.floor(progressgamebar1 / 2));
                    process.stdout.write(Titlecolor1(`\r_____You______ ${Progressbartimer1}${remaningtimer} ${Titlecolor(`|TARGET|`)}`));
            
                    if (countedtime1 >= Timelimited1) {
                        clearInterval(sleep2);
            
                        const RandomChanceEnemyCanKillYou2 = Math.random();
            
                        if (RandomChanceEnemyCanKillYou2 < 0.3) {
                            Target3 = true;
                        }
                          else {
                            Target3 = false;
                        }
            
                        if (Target3) {
                            console.log(Titlecolor1(`\n You have successfully eliminated the target ${targetname}`));
                            Enemy_Health = 0;
                            console.log(Titlecolor1(`Enemy Health: ${Enemy_Health}`));
                        }
                          else {
                            console.log(Titlecolor(`Police have been spotted You!`));
                            console.log(Titlecolor(`Police Eliminated you.`));
                            Player_Health = 0;
                            console.log(Titlecolor(`Player Health: ${Player_Health}`));
                        }
                        Repetation(); 
                    }
                };
            
                const sleep2 = setInterval(MediumWilson1, ProgressBarAnimateTimer1);
              
            }

        };

        if (ACTION.Difficulty === "Go Back To main menu"){
            await ADVENTURE_GAME();
        }

    };




    async function Repetation() {
        const Repeattask:TypeData = await inquirer.prompt([
            {
                message: color6("Do You Want To Restart Your Game ?"),
                name: "Restart",
                type: "list",
                choices: [
                    {name: Titlecolor1("Yes"), value: "Yes" },
                    {name: Titlecolor("No"), value: "No"},
                ]
            },
        ]);

        if (Repeattask.Restart === "Yes"){
            GameOn();
        }
        else {
            process.exit();
        }
    }

    GameOn();





    };

        const zombieGame = async (): Promise<void> => {
          const spinner = createSpinner();
              spinner.start(); 
              await new Promise(Animation => setTimeout(Animation, 5000));
              spinner.stop();
              console.clear();
        const displayHealthStatus = (playerHealth: number,zombieHealth: number, zombieDamage: number,  remainingZombies: number, playerDamage: number) => {
          console.log(color4('----------------------------'));
          console.log(Titlecolor1(`Your Health: ${playerHealth}`));
          console.log(Titlecolor1(`Your Damage: ${playerDamage}`));
          console.log(Titlecolor(`Zombie Health: ${zombieHealth}`));
          console.log(Titlecolor(`Zombie Damage: ${zombieDamage}`));
          console.log(color5(`Remaining Zombies: ${remainingZombies}`));
          console.log(color4('----------------------------'));
        };
        
        const difficultyChoices = [
          {
            name: Titlecolor1('Easy:'),
            value: 'Easy',
          },
          {
            name: Titlecolor1('Medium:'.toUpperCase()),
            value: 'Medium',
          },
          {
            name: Titlecolor1('Hard:'.toUpperCase()),
            value: 'Hard',
          },
          {
            name: color5('Go Back To Main Menu:'.toUpperCase()),
            value: 'Go Back To Main Menu',
          },
        ];
        const { difficulty }: { difficulty: string } = await inquirer.prompt([
          {
            name: 'difficulty',
            message: color6('Select the difficulty level:'),
            type: 'list',
            choices: difficultyChoices,
          },
        ]);

        let zombieTypes: {
          name: string;
          health: number;
          total: number;
          damage: number;
        }[] = [];



        if (difficulty === 'Easy') {
          const zombieChoices = [
            { name: Titlecolor('Skeleton Zombie:'.toUpperCase()), health: 25, total: 140, damage: 10 },
          ];

          const zombieChoices1 = ["Go Back To Main Menu"];

          for (const choice of zombieChoices) {
            choice.total = 140; 
          }

          const { chosenZombie }: { chosenZombie: string } = await inquirer.prompt([
            {
              name: 'chosenZombie',
              message: color6('Select a zombie to fight:'),
              type: 'list',
              choices:[...zombieChoices.map((zombie) => zombie.name,),
                ...(zombieChoices1.includes("Go Back To Main Menu") ? [color5("Go Back To Main Menu:".toUpperCase())] : []),
              ] ,
            },
          ]);

          if (chosenZombie === color5('Go Back To Main Menu:'.toUpperCase())) {
            return await zombieGame();
          }
          else {
            const selectedZombie = zombieChoices.find((zombie) => zombie.name === chosenZombie);

            if (selectedZombie) {
              for (let a = 0; a < selectedZombie.total; a++) {
                zombieTypes.push({ ...selectedZombie });
              }
            }
          }
        let playerHealth = 100;
        let defeatedZombies = 0;
        let healthPotions = 10;
        let playerDamage = 30; 
        let zombiesDefeatedThisRound = 0;

        while (zombieTypes.length > 0 && playerHealth > 0) {
          const RandomSelection = Math.floor(Math.random() * zombieTypes.length);
          const randomZombie = zombieTypes[RandomSelection];

          console.log(Titlecolor(`A ${randomZombie.name} APPROACHES TO YOU!`));
          displayHealthStatus(playerHealth, randomZombie.health, randomZombie.damage, zombieTypes.length, playerDamage);

          const playerAttackChoices = [Titlecolor1('AKM Attack')];
          if (playerHealth < 40 && healthPotions > 0) {
            playerAttackChoices.push('Heal');
          }

          const { attack }: { attack: string } = await inquirer.prompt([
            {
              name: 'attack',
              message: color6('Select an attack:'),
              type: 'list',
              choices: playerAttackChoices,
            },
          ]);

          if (attack === Titlecolor1('AKM Attack')) {
            const damage = Math.floor(Math.random() * 20) + 10;
            randomZombie.health -= damage;
            console.log(Titlecolor(`YOU DEAL ${damage} DEMAGE TO ${randomZombie.name} `));
            displayHealthStatus(playerHealth, randomZombie.health, randomZombie.damage, zombieTypes.length, playerDamage);
          
            if (randomZombie.health <= 25) {
              defeatedZombies++;
              zombiesDefeatedThisRound++;
              zombieTypes.splice(RandomSelection, 1);
            }
            if (defeatedZombies % 20 === 0) {
              healthPotions++; 
              console.log(color6('You Received a Heal Potion!'.toUpperCase()));
            }
          }
          else if (attack === 'Heal') {
            if (playerHealth < 100) {
              if (healthPotions > 0) {
                await SPINNERANIMATION();
                playerHealth += 100; 
                healthPotions--;
                console.log(color5(`YOU SUCCESS FULLY HEALED UP ${playerHealth} HEALTH.`));
              } 
              else {
                console.log(Titlecolor('You are out of healing potions!'.toUpperCase()));
              }
            } 
            else {
              console.log(Titlecolor('You are already at full health!'.toUpperCase()));
            }
            displayHealthStatus(playerHealth, randomZombie.health, randomZombie.damage, zombieTypes.length, playerDamage);
          }
          if (zombiesDefeatedThisRound === 10) {
            playerHealth -= 10; 
            zombiesDefeatedThisRound = 0;
            console.log(color5('You lost 10 health.'.toUpperCase()));
            displayHealthStatus(playerHealth, randomZombie.health, randomZombie.damage, zombieTypes.length, playerDamage);
          }
        }

        if (playerHealth <= 0) {
          console.log(Titlecolor('You Lost! Game Over! You Were Defeated By the Zombie'.toUpperCase()));
        } 
        else {
          console.log(Titlecolor1(`You Won The Game! All The Zombies Are Defeated:`.toUpperCase()));
        }
        } 

        if (difficulty === "Go Back To Main Menu"){
          return await ADVENTURE_GAME();
        }



        if (difficulty === 'Medium') {
          const zombieChoices = [
            { name: Titlecolor('Walker Zombie:'.toUpperCase()), health: 50, total: 200, damage: 15 },
          ];

          const zombieChoices1 = ["Go Back To Main Menu"];

          for (const choice of zombieChoices) {
            choice.total = 200; 
          }

          const { chosenZombie }: { chosenZombie: string } = await inquirer.prompt([
            {
              name: 'chosenZombie',
              message: color6('Select a zombie to fight:'),
              type: 'list',
              choices:[...zombieChoices.map((zombie) => zombie.name,),
                ...(zombieChoices1.includes("Go Back To Main Menu") ? [color5("Go Back To Main Menu:".toUpperCase())] : []),
              ] ,
            },
          ]);

          if (chosenZombie === color5('Go Back To Main Menu:'.toUpperCase())) {
            return await zombieGame();
          }
          else {
            const selectedZombie = zombieChoices.find((zombie) => zombie.name === chosenZombie);

            if (selectedZombie) {
              for (let a = 0; a < selectedZombie.total; a++) {
                zombieTypes.push({ ...selectedZombie });
              }
            }
          }
        let playerHealth = 100;
        let defeatedZombies = 0;
        let healthPotions = 5;
        let playerDamage = 40; 
        let zombiesDefeatedThisRound = 0;

        while (zombieTypes.length > 0 && playerHealth > 0) {
          const RandomSelection = Math.floor(Math.random() * zombieTypes.length);
          const randomZombie = zombieTypes[RandomSelection];

          console.log(Titlecolor(`A ${randomZombie.name} APPROACHES TO YOU!`));
          displayHealthStatus(playerHealth, randomZombie.health, randomZombie.damage, zombieTypes.length, playerDamage);

          const playerAttackChoices = [Titlecolor1('AKM Attack')];
          if (playerHealth < 40 && healthPotions > 0) {
            playerAttackChoices.push('Heal');
          }

          const { attack }: { attack: string } = await inquirer.prompt([
            {
              name: 'attack',
              message: color6('Select an attack:'),
              type: 'list',
              choices: playerAttackChoices,
            },
          ]);

          if (attack === Titlecolor1('AKM Attack')) {
            const damage = Math.floor(Math.random() * 30) + 10;
            randomZombie.health -= damage;
            console.log(Titlecolor(`YOU DEAL ${damage} DEMAGE TO ${randomZombie.name} `));
            displayHealthStatus(playerHealth, randomZombie.health, randomZombie.damage, zombieTypes.length, playerDamage);
          
            if (randomZombie.health <= 25) {
              defeatedZombies++;
              zombiesDefeatedThisRound++;
              zombieTypes.splice(RandomSelection, 1);
            }
            if (defeatedZombies % 40 === 0) {
              healthPotions++; 
              console.log(color6('You Received a Heal Potion!'.toUpperCase()));
            }
          }
          else if (attack === 'Heal') {
            if (playerHealth < 100) {
              if (healthPotions > 0) {
                await SPINNERANIMATION();
                playerHealth += 100; 
                healthPotions--;
                console.log(color5(`YOU SUCCESS FULLY HEALED UP ${playerHealth} HEALTH.`));
              } 
              else {
                console.log(Titlecolor('You are out of healing potions!'.toUpperCase()));
              }
            } 
            else {
              console.log(Titlecolor('You are already at full health!'.toUpperCase()));
            }
            displayHealthStatus(playerHealth, randomZombie.health, randomZombie.damage, zombieTypes.length, playerDamage);
          }
          if (zombiesDefeatedThisRound === 8) {
            playerHealth -= 5; 
            zombiesDefeatedThisRound = 0;
            console.log(color5('You lost 10 health.'.toUpperCase()));
            displayHealthStatus(playerHealth, randomZombie.health, randomZombie.damage, zombieTypes.length, playerDamage);
          }
        }

        if (playerHealth <= 0) {
          console.log(Titlecolor('You Lost! Game Over! You Were Defeated By the Zombie'.toUpperCase()));
        } 
        else {
          console.log(Titlecolor1(`You Won The Game! All The Zombies Are Defeated:`.toUpperCase()));
        }
        } 



        if (difficulty === 'Hard') {
          const zombieChoices = [
            { name: Titlecolor('Mort Zombie:'.toUpperCase()), health: 75, total: 300, damage: 20 },
          ];

          const zombieChoices1 = ["Go Back To Main Menu"];

          for (const choice of zombieChoices) {
            choice.total = 300; 
          }

          const { chosenZombie }: { chosenZombie: string } = await inquirer.prompt([
            {
              name: 'chosenZombie',
              message: color6('Select a zombie to fight:'),
              type: 'list',
              choices:[...zombieChoices.map((zombie) => zombie.name,),
                ...(zombieChoices1.includes("Go Back To Main Menu") ? [color5("Go Back To Main Menu:".toUpperCase())] : []),
              ] ,
            },
          ]);

          if (chosenZombie === color5('Go Back To Main Menu:'.toUpperCase())) {
            return await zombieGame();
          }
          else {
            const selectedZombie = zombieChoices.find((zombie) => zombie.name === chosenZombie);

            if (selectedZombie) {
              for (let a = 0; a < selectedZombie.total; a++) {
                zombieTypes.push({ ...selectedZombie });
              }
            }
          }
        let playerHealth = 100;
        let defeatedZombies = 0;
        let healthPotions = 5;
        let playerDamage = 50; 
        let zombiesDefeatedThisRound = 0;

        while (zombieTypes.length > 0 && playerHealth > 0) {
          const RandomSelection = Math.floor(Math.random() * zombieTypes.length);
          const randomZombie = zombieTypes[RandomSelection];

          console.log(Titlecolor(`A ${randomZombie.name} APPROACHES TO YOU!`));
          displayHealthStatus(playerHealth, randomZombie.health, randomZombie.damage, zombieTypes.length, playerDamage);

          const playerAttackChoices = [Titlecolor1('AKM Attack')];
          if (playerHealth < 40 && healthPotions > 0) {
            playerAttackChoices.push('Heal');
          }

          const { attack }: { attack: string } = await inquirer.prompt([
            {
              name: 'attack',
              message: color6('Select an attack:'),
              type: 'list',
              choices: playerAttackChoices,
            },
          ]);

          if (attack === Titlecolor1('AKM Attack')) {
            const damage = Math.floor(Math.random() * 40) + 10;
            randomZombie.health -= damage;
            console.log(Titlecolor(`YOU DEAL ${damage} DEMAGE TO ${randomZombie.name} `));
            displayHealthStatus(playerHealth, randomZombie.health, randomZombie.damage, zombieTypes.length, playerDamage);
          
            if (randomZombie.health <= 30) {
              defeatedZombies++;
              zombiesDefeatedThisRound++;
              zombieTypes.splice(RandomSelection, 1);
            }
            if (defeatedZombies % 70 === 0) {
              healthPotions++; 
              console.log(color6('You Received a Heal Potion!'.toUpperCase()));
            }
          }
          else if (attack === 'Heal') {
            if (playerHealth < 100) {
              if (healthPotions > 0) {
                await SPINNERANIMATION();
                playerHealth += 100; 
                healthPotions--;
                console.log(color5(`YOU SUCCESS FULLY HEALED UP ${playerHealth} HEALTH.`));
              } 
              else {
                console.log(Titlecolor('You are out of healing potions!'.toUpperCase()));
              }
            } 
            else {
              console.log(Titlecolor('You are already at full health!'.toUpperCase()));
            }
            displayHealthStatus(playerHealth, randomZombie.health, randomZombie.damage, zombieTypes.length, playerDamage);
          }
          if (zombiesDefeatedThisRound === 5) {
            playerHealth -= 5; 
            zombiesDefeatedThisRound = 0;
            console.log(color5('You lost 10 health.'.toUpperCase()));
            displayHealthStatus(playerHealth, randomZombie.health, randomZombie.damage, zombieTypes.length, playerDamage);
          }
        }

        if (playerHealth <= 0) {
          console.log(Titlecolor('You Lost! Game Over! You Were Defeated By the Zombie'.toUpperCase()));
        } 
        else {
          console.log(Titlecolor1(`You Won The Game! All The Zombies Are Defeated:`.toUpperCase()));
        }
        } 
          
            ZOMBIEGAMERESTARTFUNCTION();

          };
        const ZOMBIEGAMERESTARTFUNCTION =async () => {
          const {ZombieGameRestart}:TypeData = await inquirer.prompt([
            {
              message: Titlecolor1("Do You Want To Restart Your Game ?"),
              name: "ZombieGameRestart",
              type:"list",
              choices: [
                { name: Titlecolor1("Yes"), value: "Yes" },
                { name: Titlecolor("No"), value: "No" },
              ],
            }
          ]);
          if (ZombieGameRestart === "Yes"){
            await zombieGame();
          }
          else {
            process.exit();
          }
        }

        const Exit = async() => {
            if (AdventureGameType.menu === "Exit") {
                const exitConfirmation = await inquirer.prompt([
                  {
                    message: Titlecolor("Are you sure you want to exit Your Game ?"),
                    name: "exit",
                    type: "list",
                    choices: [
                      { name: Titlecolor("Yes") , value: "Yes" },
                      { name: Titlecolor1("No"), value: "No" },
                    ],
                  },
                ]);
            
                if (exitConfirmation.exit === "Yes") {
                  if (exitConfirmation.exit === "Yes"){
                    console.log(color4("<<====================================================>>"));
                    console.log(color6("<<==============>> THANKS FOR PLAYING <<==============>>"));
                    console.log(color4("<<====================================================>>"));
                  }
                  process.exit();
                } 
                else {
                  ADVENTURE_GAME();
                }
              };

        }
if (AdventureGameType.menu === "ASSASSIN:") {
    Title(Titlecolor2("ASSASSIN:"));
    await AssassinGame();
    }
    if (AdventureGameType.menu === "ZOMBIE GAME:") {
        Title(Titlecolor("ZOMBIE:"));
        await zombieGame();
    }
    if (AdventureGameType.menu === "Exit"){
        Exit();
    }
}
ADVENTURE_GAME();