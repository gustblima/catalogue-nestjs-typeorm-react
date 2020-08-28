import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

const randomElem = (array: any[]) => array[Math.ceil(Math.random() * (array.length - 1))]

export class Seed1598589131829 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		const CategorySeed = [{
			name: 'Solteiro'
		}, {
			id: 2,
			name: 'Queen'
		}];

		const categories = await getRepository('category').save(CategorySeed);

		const DealsSeed = [{
			fixedAmount: 0,
			percentageAmount: 50,
			startsAt: new Date(),
			expiresAt: null
		}];
		
    const deals = await getRepository('deal').save(DealsSeed);
    
    const createPhotos = (quantity: number) => {
      return [...Array(quantity)].map((n, i) => {
        return {
          path: randomElem([
            "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/still/k_n3seszo20cz-1536px-1597061515854.jpg",
            "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/still/e_mic1fgo20cz-1589984361531.jpg",
            "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/still/c_dbgdlyp21ar-1536px-1597403988197.jpg",
            "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/semi-environment/site-1536px-1589905787550.jpg",
            "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/semi-environment/site-1536px-1590088430429.jpg",
            "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/semi-environment/1536px-1590088716601.jpg",
            "https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/still/bdkitcc1fmcat-1588710335568.jpg"
          ]),
          sortOrder: i
        }
      })
    }

    console.log(createPhotos(4))

		const createProducts = (quantity: number) => {
      return [...Array(quantity)].map((n, i) => {
        return {
          name: randomElem(['Kit de cama 210 fios', 'Kit Cama Cetim', 'Kit Colcha']),
          description: 'Classic I',
          isPublished: true,
          photos: createPhotos(4),
          variants: [{
            deals,
            category: randomElem(categories),
            price: randomElem([10000, 20000, 5000]),
          }]
        }
      })
    }
    const ProductsSeeds = createProducts(200)
    
    await getRepository('product').save(ProductsSeeds);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
	}

}
