(function stringExtension(){
    String.prototype.ensureStart = function(str){
        if(!this.startsWith(str)){
            return str + this
        }
        return this.toString()
    }
    String.prototype.ensureEnd = function(str){
        if(!this.endsWith(str)){
            return this + str
        }
        return this.toString()
    }
    String.prototype.isEmpty = function(){
        return this.length === 0 ? true : false
    }
    String.prototype.truncate = function(n){
        if (n < 4) {
            return ".".repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        }
        const spaceIndex = this.lastIndexOf(' ', n - 3);
        if (spaceIndex !== -1) {
            return this.slice(0, spaceIndex) + '...';
        }
        return this.slice(0, n - 3) + '...';
    }
    String.format = function(str, ...params) {
        for(let i = 0; i < params.length; i++){
            str = str.replace(`{${i}}`, params[i])
        }
        return str;
    };
})();

let str = 'my string';
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox',
  'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}',
  'dog'));





