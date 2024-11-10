document.getElementById('dietForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const goal = document.getElementById('goal').value;
    const allergies = document.getElementById('allergies').value;

    // Generate a simple diet plan based on the goal
    let dietPlan = '';

    switch(goal) {
        case 'weight_loss':
            dietPlan = `
                <h2>Hello, ${name}!</h2>
                <p>Here's your personalized diet plan for weight loss:</p>
                <ul>
                    <li><strong>Breakfast:</strong> Oatmeal with fruits</li>
                    <li><strong>Lunch:</strong> Grilled chicken salad</li>
                    <li><strong>Dinner:</strong> Baked fish with vegetables</li>
                    <li><strong>Snacks:</strong> Almonds and an apple</li>
                </ul>
            `;
            break;
        case 'muscle_gain':
            dietPlan = `
                <h2>Hello, ${name}!</h2>
                <p>Here's your personalized diet plan for muscle gain:</p>
                <ul>
                    <li><strong>Breakfast:</strong> Scrambled eggs with spinach</li>
                    <li><strong>Lunch:</strong> Quinoa with grilled chicken</li>
                    <li><strong>Dinner:</strong> Beef steak with broccoli</li>
                    <li><strong>Snacks:</strong> Greek yogurt and a banana</li>
                    <li><strong>Snacks:</strong> and a banana</li>
                </ul>
            `;
            break;
        case 'maintain':
            dietPlan = `
                <h2>Hello, ${name}!</h2>
                <p>Here's your personalized diet plan to maintain weight:</p>
                <ul>
                    <li><strong>Breakfast:</strong> Whole grain toast with avocado</li>
                    <li><strong>Lunch:</strong> Turkey sandwich with salad</li>
                    <li><strong>Dinner:</strong> Stir-fried tofu with vegetables</li>
                    <li><strong>Snacks:</strong> Carrot sticks with hummus</li>
                </ul>
            `;
            break;
       
            break;
            case 'week meal plan':
            dietPlan = `
                <h2>Hello, ${name}!</h2>
                <p>Here's your personalized diet plan to maintain weight:</p>
                <ul>
                    <li><strong>Breakfast:</strong> MONDAY: Breakfast: balehann,grains </li>
                    <li><strong>Lunch:</strong> Turkey sandwich with salad</li>
                    <li><strong>Dinner:</strong> Stir-fried tofu with vegetables</li>
                    <li><strong>Snacks:</strong> Carrot sticks with hummus</li>
                </ul>
            `;
            break;

            default:
                dietPlan = '<p>Please select a valid diet goal.</p>';
    }

    // Display the diet plan in the timetable div
    document.getElementById('timetable').innerHTML = dietPlan;

    // Clear the form fields
    document.getElementById('dietForm').reset();
});