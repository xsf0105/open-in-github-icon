import {
	StatusBarAlignment,
	window,
	env,
	commands,
	Disposable,
	Uri,
} from "vscode";
import { simpleGit } from "simple-git";

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
export function activate(context: { subscriptions: Disposable[] }) {
	context.subscriptions.push(
		commands.registerCommand("openInGitHubIcon.openProject", () => {
			// simpleGit().remote({'-v'})
			// console.log(simpleGit().getRemotes(), 32);

			// simpleGit()
			// 	.getRemotes()
			// 	.then((res) => {
			// 		console.log(res);
			// 	});

			window.showInformationMessage(
				`您执行了 openInGitHubIcon.openProject 命令${simpleGit().getRemotes()}`
			);
			env.openExternal(Uri.parse("https://github.com"));

			// TODO:
			// window.showErrorMessage ( 'Remote repository not found' );
		})
	);

	const statusBar = window.createStatusBarItem(StatusBarAlignment.Left, 0);
	statusBar.command = "openInGitHubIcon.openProject";
	statusBar.text = "$(github)";
	statusBar.tooltip = "Open in GitHub";
	statusBar.show();
}

/**
 * 插件被释放时触发
 */
export function deactivate() {}
