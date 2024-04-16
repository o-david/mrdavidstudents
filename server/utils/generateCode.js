import generator from 'generate-password';

const generatecode = () => {
    return generator.generate({
        length: 4,
        numbers: true,
        uppercase: false,
        symbols: false,
        lowercase: false
      });

}

export default generatecode