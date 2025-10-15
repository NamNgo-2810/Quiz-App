const fs = require('fs');
const path = require('path');

// Function to count questions in a JSON file
function countQuestions(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const questions = JSON.parse(content);
        return Array.isArray(questions) ? questions.length : 0;
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error.message);
        return 0;
    }
}

// Function to generate a clean display name from filename
function generateDisplayName(filename) {
    // Remove .json extension
    let name = filename.replace('.json', '');
    
    // Handle special cases for better display names
    const nameMap = {
        'saa_questions': 'SAA C03',
        '1688': '1688',
        'HIỂU BIẾT CHUNG': 'Hiểu biết chung',
        'KY NANG QUAN LY': 'Kỹ năng quản lý',
        'VH1': 'Văn hóa 1',
        'VH2': 'Văn hóa 2'
    };
    
    return nameMap[name] || name;
}

// Scan the questions directory
const questionsDir = path.join(__dirname, 'questions');
const manifest = {
    topics: [],
    lastUpdated: new Date().toISOString()
};

try {
    const files = fs.readdirSync(questionsDir);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    for (const file of jsonFiles) {
        const filePath = path.join(questionsDir, file);
        const questionCount = countQuestions(filePath);
        
        if (questionCount > 0) {
            manifest.topics.push({
                filename: file,
                displayName: generateDisplayName(file),
                questionCount: questionCount,
                path: `questions/${file}`
            });
        }
    }
    
    // Sort topics by display name
    manifest.topics.sort((a, b) => a.displayName.localeCompare(b.displayName));
    
    // Write manifest file
    const manifestPath = path.join(__dirname, 'questions-manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    
    console.log(`Generated manifest with ${manifest.topics.length} topics:`);
    manifest.topics.forEach(topic => {
        console.log(`  - ${topic.displayName}: ${topic.questionCount} questions`);
    });
    
} catch (error) {
    console.error('Error generating manifest:', error.message);
    process.exit(1);
}
