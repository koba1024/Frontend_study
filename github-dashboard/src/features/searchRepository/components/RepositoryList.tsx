import type { RepositoryListProps } from "../type";

export default function RepositoryList(props: RepositoryListProps) {
	return (
		<div className="mt-5">
			<table className="table-auto border-collapse border border-gray-400">
				<thead>
					<tr>
						<th
							scope="col"
							className="border border-gray-400 px-4 py-2"
						>
							作成者
						</th>
						<th
							scope="col"
							className="border border-gray-400 px-4 py-2"
						>
							タイトル
						</th>
						<th
							scope="col"
							className="border border-gray-400 px-4 py-2"
						>
							スター数
						</th>
						<th
							scope="col"
							className="border border-gray-400 px-4 py-2"
						>
							URL
						</th>
					</tr>
				</thead>
				<tbody>
					{props.items.map((item) => (
						<tr key={item.full_name} className="hover:bg-gray-50">
							<td className="border border-gray-400 px-4 py-2">
								{item.owner.login}
							</td>
							<td className="border border-gray-400 px-4 py-2">
								{item.full_name}
							</td>
							<td className="border border-gray-400 px-4 py-2">
								{item.stargazers_count}
							</td>
							<td className="border border-gray-400 px-4 py-2">
								<a href={item.html_url} target="_blank">
									{item.html_url}
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
