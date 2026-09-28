* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 30px 15px;
}

.container {
    width: 100%;
    max-width: 900px;
    margin: auto;
}

header {
    text-align: center;
    color: white;
    margin-bottom: 25px;
}

header h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

header p {
    font-size: 17px;
}

.card {
    background: white;
    padding: 25px;
    margin-bottom: 20px;
    border-radius: 18px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.card h2 {
    margin-bottom: 18px;
    color: #333;
}

.form {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

input,
select {
    flex: 1;
    min-width: 180px;
    padding: 13px;
    border: 2px solid #ddd;
    border-radius: 10px;
    font-size: 15px;
    outline: none;
}

input:focus,
select:focus {
    border-color: #667eea;
}

button {
    padding: 13px 20px;
    border: none;
    border-radius: 10px;
    background: #667eea;
    color: white;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    transition: 0.2s;
}

button:hover {
    background: #5568d9;
    transform: translateY(-2px);
}

.team-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

.member {
    background: #f0f2ff;
    color: #4d5edb;
    padding: 10px 15px;
    border-radius: 20px;
    font-weight: bold;
}

.task {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    background: #f8f8f8;
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 10px;
    border-left: 5px solid #667eea;
}

.task-info {
    flex: 1;
}

.task-name {
    font-weight: bold;
    color: #333;
}

.assigned {
    font-size: 13px;
    color: #777;
    margin-top: 5px;
}

.completed {
    text-decoration: line-through;
    color: #999;
}

.complete-btn {
    background: #28a745;
}

.complete-btn:hover {
    background: #218838;
}

.delete-btn {
    background: #dc3545;
}

.delete-btn:hover {
    background: #c82333;
}

.progress-box {
    margin-top: 25px;
}

.progress {
    width: 100%;
    height: 15px;
    background: #ddd;
    border-radius: 20px;
    overflow: hidden;
    margin: 10px 0;
}

#progressBar {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #28a745, #20c997);
    transition: width 0.4s;
}

#progressText {
    text-align: center;
    font-weight: bold;
    color: #555;
}

.empty {
    text-align: center;
    color: #999;
    padding: 20px;
}

/* Mobile */
@media (max-width: 600px) {

    header h1 {
        font-size: 28px;
    }

    .card {
        padding: 18px;
    }

    .task {
        flex-direction: column;
        align-items: stretch;
    }

    button {
        width: 100%;
    }
}
