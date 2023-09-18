// create your classes here
class Stats{
    useStr(){
        console.log("Physical Attack!");
    }
}
class Magic extends Stats {
    useMag(){
        super.useStr()
        console.log("Magic Attack!")
    }
}
class Dexterity extends Stats{
    useDex(){
        console.log("You have fled the scene!")
    }
}
var mana = new Magic();
var run = new Dexterity();
mana.useMag();
run.useDex();