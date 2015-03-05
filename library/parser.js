/**
 * Created by Sundeep on 3/5/2015.
 */
/**
 * Created by Sundeep on 3/5/2015.
 */
var output = '';
function parse(key,data,indent,indentInc){
    if(!key){
        key = "'NO NAME POROVIDED'";
    }
    var datatype = typeof(data);
    if(datatype=="object"){
        if(data instanceof Array){
            datatype = "array";
        }
        output=output+indent+key+" - "+datatype+"\n";
        for(key in data){
            parse(key,data[key],indent+indentInc,indentInc);
        }
    }else{
        output=output+indent+key+" - "+datatype+"\n";
    }
    return output;
}

exports.output = output;
exports.parse = parse;
