

function User(name,lastName,email){
    this.name=name;
    this.lastName=lastName;
    this.email=email;
    this.online=true;//aktiflik durumu
    this.follow=0;//takipçi sayısı 
}
User.prototype.followed=function(u){
    this.follow++;
    console.log(`${this.name} , ${u.name}'i takip etti.`)
    console.log(`${this.name}'ın ${this.follow} takipçisi oldu.`)
    return this;
}
User.prototype.login=function(){
    this.online=true;
    console.log(`${this.name},${this.email} ile giriş yaptı`)
}

User.prototype.logout=function(){
    this.online=false;
    console.log(`${this.name},${this.email} ile çıkış yaptı`)
}

User.prototype.liked=function(u){
    console.log(`${this.name} , ${u.name}'in resmini beğendi 💖💖`)
}

Admin.prototype=Object.create(User.prototype)

Admin.prototype.deleteUser=function(u){
    users=users.filter(user=>{
        return user.email != u.email
    })
    console.log(`${users.length}. kullanıcı silindi`)
}

function Admin(...args){
    User.apply(this,args)
    this.role='Ceo Furkan';
}

let userOne = new User('Furkan','Kavak','furkankvk@gmail.com');
let userTwo = new User('Salih','Camış','camıss@gmail.com');
let userThree = new User('Gamze','Kavak','gamze@gmail.com');
let admn=new Admin('Ali','Magan','alimgn@gmail.com')


console.log('----------------------------------------')
let users=[userOne,userTwo,admn]
console.log('----------------------------------------')
userOne.login(admn)
console.log('----------------------------------------')
console.log(admn)
console.log('----------------------------------------')
userTwo.liked(userOne)
console.log('----------------------------------------')
userOne.followed(userTwo)
console.log('----------------------------------------')
userOne.followed(userThree)
console.log('----------------------------------------')
userOne.logout()
console.log('----------------------------------------')
userThree.liked(userOne)
console.log(users)
console.log('----------------------------------------')
console.log(users)
