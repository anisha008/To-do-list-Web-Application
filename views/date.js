exports.getDay= function (){
    const todayDate=new Date();
    const options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    const todayDay=todayDate.toLocaleDateString("en-US",options);
    return todayDay;
}