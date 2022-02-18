import supertest from 'supertest';
import imageRoute from '../../../utilities/routes/imageRoute';

const request = supertest(imageRoute);

describe("Testing the images endpoint", () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    it('expect the image api to answer a request', async () => {
        const response = await request.get('/images?filename=fjord&width=200&height=300');

        expect(response.status).toBe(200);
    })

    it("expects api to throw an error if the iamge does not exist - (fjordi instead of fjord)", async () => {
        const response = await request.get('/images?filename=fjordi&width=200&height=300');

        expect(response.text).toBe('Error occured! Image not found!');
    });
})