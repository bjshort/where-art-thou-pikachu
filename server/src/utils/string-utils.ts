export class StringUtils {
  public static removeNewlines(text: string) {
    return text.replace(/(\r\n|\n|\r|\x0B|\x0C|\u0085|\u2028|\u2029)/gm, ' ');
  }

  public static isBlank(str) {
    return !str || /^\s*$/.test(str);
  }
}
