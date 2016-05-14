// code solution here
function President (name, politicalParty, yearsInOffice, homeState) {
  this.name = name
  this.politicalParty = politicalParty
  this.yearsInOffice = yearsInOffice
  this.homeState = homeState
}

President.prototype.veto = function() {
  return "NO!"
}

President.prototype.passBill = function() {
  return "You can do that!"
}

President.prototype.doCharity = function() {
  return "I like to help people."
}

President.prototype.conductPressInterview = function() {
  return "I am proud to be an American."
}

President.prototype.sayHi = function() {
  return "Hi, my name is " + this.name + "." + " I am from " + this.homeState + "." + " I represent the " + this.politicalParty + "s" + ", and was in office " + this.yearsInOffice + "."

}

george = new President("George Washington", "none", 7, "Virginia");
abraham = new President("Abraham Lincoln", "National Union", 4, "Kentucky");
richard = new President("Richad Nixon", "Republican", 5, "California");
jimmy = new President("Jimmy Carter", "Democrat", 4, "Gerogia");