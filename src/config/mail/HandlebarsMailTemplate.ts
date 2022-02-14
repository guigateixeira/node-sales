import fs from 'fs';
import handlebars from 'handlebars';

interface ITemplateVariable {
  [key: string]: string | number;
}

interface IParseMailTemplate {
  file: string;
  variables: ITemplateVariable;
}

export default class HandlebarsMailTemplate {
  public async parse({ file, variables }: IParseMailTemplate): Promise<string> {
    const fileTemplate = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(fileTemplate);

    return parseTemplate(variables);
  }
}
