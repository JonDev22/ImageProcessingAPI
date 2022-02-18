import imageSharp from "../../utilities/imageSharp";
import { promises, constants } from 'fs';

describe("Testing sharp function", () => {
    it("expects the resized image fjords to exist", async () => {
        const sourceFileName = "fjord";
        const height = 300;
        const width = 300;
        const targetFileName = `images/thumbs/${sourceFileName}_${width}_${height}.jpeg`;

        const response = await imageSharp(sourceFileName, targetFileName, height, width);

        await expectAsync(
            promises.access(targetFileName, constants.F_OK)
        ).toBeResolved();
    })

    it("expects to throw error if image does not exist", async () => {
        const sourceFileName = "fjordi";
        const height = 300;
        const width = 300;
        const targetFileName = `images/thumbs/${sourceFileName}_${width}_${height}.jpeg`;

        const response = await imageSharp(sourceFileName, targetFileName, height, width);

        console.log(response);
    })
});