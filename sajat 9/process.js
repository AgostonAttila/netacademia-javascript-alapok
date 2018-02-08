//console.log(process);

//environment változók ,node verzió v8 verzió

//EventDemitter


process.on('exit', function () {
    console.log('I"m about to exit');
});


console.log('alma');
process.exit();