//Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//Creating factory function with 2 parameters for p.aequor:

const pAequorFactory = (num, arr) => {
return {
  specimenNum: num,
  dna: arr,
//Creating method that performs random mutation of a single base within DNA's sample:
  mutate() {
//selecting base from the dna property and replacing it with another value:
			
const randNum = Math.floor(Math.random() * this.dna.length);
let randDna = returnRandBase();            
while (this.dna[randNum] === randDna)  { // For a new different value
     randDna = returnRandBase();
  }
     this.dna[randNum] = randDna;
},
 //compare the DNA of two samples and display percentage of identical bases that appear in the same position:
		
  compareDNA(pAequor) {
    let sameCount = 0;			
    if(this.dna.length !== pAequor.dna.length) {
    console.log('Different length of DNA strands')
    } else {
      for (let i = 0; i < this.dna.length; i++) {
    if (this.dna[i] === pAequor.dna[i]) {
            sameCount++;
    } 
}            
const perIdentBase = Math.floor((sameCount / this.dna.length) * 100);
	return perIdentBase 
}  
  },
//pAequor sample will be likely to survive if has 60% or more C & G bases and will return true or if else false:
 willLikelySurvive() { 
  if (this.dna.length !== 15) {
   console.log('Invalid length.');
  } else {
    let cgBase = 0;
    this.dna.forEach(base => {
  if (base === 'C' || base === 'G') {
      cgBase++;
  }
   });
 return Math.floor((cgBase / this.dna.length) * 100) >= 60;
  }
 },
 /*
 complementStrand() {
  let strand = [];
  if (this.dna.length !== 15) {
    console.log('Invalid length');
} else {
    this.dna.forEach(base => {
    switch (base) {
      case 'A':
        strand.push('T');
        break;
      case 'T':
        strand.push('A');
        break;
      case 'C':
        strand.push('G');
        break;
      case 'G':
        strand.push('C');
        break;
        default:
        console.log('Invalid base');
      }
      })
        return strand; 
    }
   } */
  }
};

//Creating a function that returns an array of 30 samples that are likely to survive:
 
const sampleSet = () => {
  let sample = [];
  let sampleIndex = 1;
  while (sample.length < 30) {
    let currentSample = pAequorFactory(sampleIndex, mockUpStrand());
    if (currentSample.willLikelySurvive()) {
        sample.push(currentSample);
    };
    sampleIndex++;
}
  return sample;
}; 

//Testing the above codes:

const test1 = pAequorFactory(1, mockUpStrand());
console.log(test1.dna);
test1.mutate();
const test2 = pAequorFactory(2, mockUpStrand());
console.log(test2.dna);
test1.compareDNA(test2);
console.log(test1.willLikelySurvive());
//console.log(test1.complementStrand());
const sample = sampleSet();
console.log(sample.length);
console.log(sample[25]);
console.log(sample[25].willLikelySurvive());