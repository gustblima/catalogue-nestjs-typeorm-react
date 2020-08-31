import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

const randomNumber = (max: number) => Math.round(Math.random() * (max - 1));
const randomElem = (array: any[]) => array[randomNumber(array.length)];

const randomElementsWithoutRepetition = (array: any[], numberOfElements: number) => {
  const indexes = [];
  while (indexes.length < numberOfElements && indexes.length < array.length) {
    const randomIndex = randomNumber(array.length);
    if(!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes.map(e => array[e]);
}

export class Seed1598589131829 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		const CategorySeed = [{
			name: 'Solteiro'
		}, {
			name: 'Queen'
    }, {
			name: 'King'
		}];

		const categories = await getRepository('category').save(CategorySeed);

		const DealsSeed = [{
			fixedAmount: 0,
      percentageAmount: 50,
      isActive: true
		}];
		
    const deals = await getRepository('deal').save(DealsSeed);
    
    const photoPaths = [
      "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/still/k_n3seszo20cz-1536px-1597061515854.jpg",
      "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/still/e_mic1fgo20cz-1589984361531.jpg",
      "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/still/c_dbgdlyp21ar-1536px-1597403988197.jpg",
      "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/semi-environment/site-1536px-1589905787550.jpg",
      "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/semi-environment/site-1536px-1590088430429.jpg",
      "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/semi-environment/1536px-1590088716601.jpg",
      "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/still/bdkitcc1fmcat-1588710335568.jpg"
    ];
    const createPhotos = (quantity: number) => {
      const paths = randomElementsWithoutRepetition(photoPaths, quantity);
      return [...Array(quantity)].map((n, i) => {
        return {
          path: paths[i],
          sortOrder: i
        }
      })
    }

		const createProducts = (quantity: number) => {
      return [...Array(quantity)].map((n, i) => {
        return {
          name: randomElem(['Kit de cama 210 fios', 'Kit Cama Cetim', 'Kit Colcha', 'Edredom']),
          description: randomElem(['Classic I', 'Classic II']),
          isPublished: true,
          photos: createPhotos(4),
          variants: [{
            deals,
            category: randomElem(categories),
            price: (randomNumber(100) + 50) * 100,
          }]
        }
      })
    }
    const ProductsSeeds = createProducts(100)
    
    await getRepository('product').save(ProductsSeeds);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
	}

}
