import inquirer from 'inquirer';
async function wordCounter() {
    const { paragraph } = await inquirer.prompt([
        {
            type: 'input',
            name: 'paragraph',
            message: 'Enter a paragraph:',
        },
    ]);
    const characterCount = paragraph.replace(/\s/g, '').length;
    const wordCount = paragraph.trim().split(/\s+/).length;
    console.log(`Character count: ${characterCount}`);
    console.log(`Word count: ${wordCount}`);
}
wordCounter()