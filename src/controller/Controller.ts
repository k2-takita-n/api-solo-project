import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Maker} from "../entity/MakerModel";
import {Ski} from "../entity/SkiModel";

export class Controller {

    private makerRepository = getRepository(Maker);
    private skiRepository = getRepository(Ski);

    //Maker
    async allMakers(request: Request, response: Response, next: NextFunction) {
        return this.makerRepository.find();
    }

    async oneMakers(request: Request, response: Response, next: NextFunction) {
        return this.makerRepository.findOne(request.params.id);
    }

    async postMakers(request: Request, response: Response, next: NextFunction) {
        return this.makerRepository.save(request.body);
    }
    
    async removeMakers(request: Request, response: Response, next: NextFunction) {
        let MakerToRemove = await this.makerRepository.findOne(request.params.id);
  
        return this.makerRepository.remove(MakerToRemove);
    }

    async patchMakers(request: Request, response: Response, next: NextFunction) {
        let makerPatch = await this.makerRepository.findOne(request.params.id);
        const after = Object.assign(makerPatch,request.body);
        return this.makerRepository.save(after);
    }

    //Ski
    async allSkis(request: Request, response: Response, next: NextFunction) {
        return this.skiRepository.find();
    }

    async oneSkis(request: Request, response: Response, next: NextFunction) {
        return this.skiRepository.findOne(request.params.id);
    }

    async postSkis(request: Request, response: Response, next: NextFunction) {
        //console.log("post",request.body);
        return this.skiRepository.save(request.body);
    }
    
    async removeSkis(request: Request, response: Response, next: NextFunction) {
        let SkiToRemove = await this.skiRepository.findOne(request.params.id);
  
        return this.skiRepository.remove(SkiToRemove);
    }

    async patchSkis(request: Request, response: Response, next: NextFunction) {
        let SkiPatch = await this.skiRepository.findOne(request.params.id);
        const after = Object.assign(SkiPatch,request.body);
        return this.skiRepository.save(after);
    }


}