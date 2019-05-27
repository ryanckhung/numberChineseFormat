class Convertor{

    static format(num){
        if (num > 99999999){
            return Math.round((num/100000000.0)*100)/100 + '亿'
        }else if(num > 9999){
            return Math.round((num/10000.0)*100)/100 + '万'
        }else{
            return num
        }
    }

}
module.exports = Convertor