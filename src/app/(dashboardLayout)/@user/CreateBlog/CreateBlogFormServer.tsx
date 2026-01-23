import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function CreateBlogFormServer() {
    const createBlog = async (formData: FormData) => {
        "use server";

        console.log(formData.get("title"));
    }
    return (
        <div>
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>CreateBlog</CardTitle>
                    <CardDescription>You can write your blog here</CardDescription>
                </CardHeader>
                <CardContent>
                    <form id="blog-form" action={createBlog}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel>Title</FieldLabel>
                                <Input type="text" name="title"></Input>
                            </Field>
                            <Field>
                                <FieldLabel>Content</FieldLabel>
                                <Input type="text" name="content"></Input>
                            </Field>
                            <Field>
                                <FieldLabel>Tags</FieldLabel>
                                <Input type="text" name="tags"></Input>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button form="blog-form" type="submit" className="w-full">Submit</Button>
                </CardFooter>
            </Card>
        </div>
    );
};