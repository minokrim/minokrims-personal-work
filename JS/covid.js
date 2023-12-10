var Countries=[]
$.ajax({
    url:"https://disease.sh/v3/covid-19/countries",
    type:"get",
    datatype:"json",

    success: function(response){
        console.log(response)
        Countries=response
        updatetable(Countries)
    },
    error: function(error){
        console.log(error)
    },
    always: function(){}
})

updatetable=(Countries)=>{
    for(country of Countries){
        var newrow="<tr><td>"+country.country+"</td><td>"+country.cases+"</td><td>"+country.recovered+"</td><td>"+country.deaths+"</td></tr>"

        $("#tablebody").append(newrow)
    }
    $("#table").DataTable();
}