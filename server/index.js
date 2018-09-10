import app from './app'


const PORT = process.env.PORT || 3000

app.listen(PORT, (err)=>{
    if(err){console.log(err.message)}
    console.log(`Server running on ${PORT}`)
})
