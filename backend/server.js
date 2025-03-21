import express from "express"
const app = express();
app.use(express.json()); 
app.post("/calci", (req, res) => {
    const { numbers } = req.body;

    if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: "Invalid input. Provide an array of numbers." });
    }

    
    if (!numbers.every(num => typeof num === "number")) {
        return res.status(400).json({ error: "Array must contain only numbers." });
    }

    const startTime = Date.now(); 
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const responseTime = Date.now(); 

    res.json({ average, responseTime: `${responseTime} ms` });
});

app.listen(3000, () => console.log("Server running on port 3000"));
