import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.BucketV2("first-bucket", {
    bucket: 'first-bucket-pos-ftr-iac',
    tags: {
        IAC: "true",
    }
});


const ecr = new aws.ecr.Repository("primeir-ecr", {
    name: 'primeiro-ecr-pos',
    imageTagMutability: 'IMMUTABLE',
    tags: {
        IAC: "true"
    }
})

export const firstBucketName = firstBucket.id;
export const firstBucketRegion = firstBucket.region;
export const firstBucketArn = firstBucket.arn;


export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
