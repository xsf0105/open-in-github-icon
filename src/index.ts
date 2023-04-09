import {
	StatusBarAlignment,
	Disposable,
	window,
	commands,
	env,
	Uri,
	workspace,
} from "vscode";

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
export function activate(context: { subscriptions: Disposable[] }) {
	context.subscriptions.push(
		commands.registerCommand("openInGitHubIcon.openProject", () => {
			if (!workspace.workspaceFolders) {
				window.showInformationMessage("Open a folder/workspace first");
				return;
			} else {
				const name = workspace.workspaceFolders[0].name; // project name(same as package.json's name)

				window.showInformationMessage(
					`您执行了 openInGitHubIcon.openProject 命令! 当前项目名为：${name}`
				);
				// TODO：可直接跳转发布系统
				// env.openExternal(Uri.parse("https://github.com"));
			}
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
